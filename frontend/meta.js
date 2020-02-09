const fs = require('fs');
const walk = require('walkdir');
const minify = require('html-minifier').minify;
const rimraf = require("rimraf");

console.log('Building meta files..');

const minifyConfig = {
    collapseWhitespace: true,
};

/* Retreive information */
const getMeta = (metaName, haystack) => {
    const searchString = `// META ${metaName}: "`;
    const metaIndex = haystack.indexOf(searchString);
    if (metaIndex < 0) {
        return;
    }

    const metaLastIndex = haystack.indexOf('"', metaIndex + searchString.length);
    const data = haystack.substring(metaIndex + searchString.length, metaLastIndex);
    return data;
};

const getMetaList = (haystack) => {
    const startSearchString = '// META LIST START'
    const endSearchString = '// META LIST END'
    const metaStartIndex = haystack.indexOf(startSearchString);
    const metaEndIndex = haystack.indexOf(endSearchString);
    if (metaStartIndex < 0 || metaEndIndex < 0) {
        return;
    }

    const data = haystack
        .substring(metaStartIndex + (startSearchString.length), metaEndIndex)
        .replace(/(\/\/)\W/g, '');
    return data;
};

/* Save information */
const cleanup = () => new Promise((resolve) => {
    console.log('Cleaning up..')
    if (fs.existsSync('meta/')) {
        rimraf("meta/", () => {
            resolve();
        });
    } else {
        resolve();
    }
});

const saveFiles = (filesList) => new Promise(() => {
    console.log('Saving files..')
    const allFiles = filesList.map((file) => {
        return new Promise((resolveFile) => {
            const dirPath = `meta${file.path}`;
            const filePath = `meta${file.path}meta`;
            console.log(`Save file ${filePath} with content ${file.body}`);
            fs.mkdir(dirPath, () => {
                fs.writeFile(filePath, file.body, { encoding: 'utf8' }, () => resolveFile()); 
            });
        }
    )});
    Promise.all(allFiles);
});

const metaFiles = [];

walk.sync('js/', (path) => {
    if (!path.includes('.tsx')) {
        return;
    }
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    if (!data) {
        return;
    }
    const pagePath = getMeta('PATH', data);
    const pageTitle = getMeta('TITLE', data);
    const pageMetaTags = getMetaList(data)
    if (!pagePath || !pageTitle) {
        return;
    }
    const metaHTML = `
        <title>${pageTitle}</title>
        ${pageMetaTags}
    `
    metaFiles.push({
        path: pagePath,
        body: minify(metaHTML, minifyConfig),
    });
    console.log(`Found tags for path: ${pagePath}`);
});

cleanup().then(() => saveFiles(metaFiles));
