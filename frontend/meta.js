const fs = require('fs');
const walk = require('walkdir');
const minify = require('html-minifier').minify;
const rimraf = require("rimraf");


const minifyConfig = {
    collapseWhitespace: true,
};

const metaFiles = [];

walk.async('js/', (path) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
        if (!data) {
            return
        }
        const pagePath = getMeta('PATH', data);
        const pageTitle = getMeta('TITLE', data);
        const pageMetaTags = getMetaList(data)
        if (!pagePath || !pageTitle) {
            return
        }
        const metaHTML = `
            <title>${pageTitle}</title>
            ${pageMetaTags}
        `
        metaFiles.push({
            path: pagePath,
            body: minify(metaHTML, minifyConfig),
        });
    });
}).then(() => {
    cleanup().then(() => saveFiles());
});

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
        .replace(/\/\//g, '');
    return data;
};

/* Save information */
const cleanup = () => new Promise((resolve) => {
    if (fs.existsSync('meta/')) {
        rimraf("meta/", () => {
            resolve();
        });
    } else {
        resolve();
    }
});

const saveFiles = () => new Promise(() => {
    const allFiles = metaFiles.map((file) => {
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