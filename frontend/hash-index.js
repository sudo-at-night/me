const fs = require('fs');
const crypto = require('crypto');

const random = crypto.randomBytes(16).toString('hex');
fs.renameSync('dist/index.html', `dist/index.${random}.html`);
