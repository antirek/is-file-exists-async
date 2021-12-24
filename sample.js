const isFileExists = require('is-file-exists-async');

async function check() {
    if (await isFileExists('./1.js')) {
        console.log('1.js exist');
    } else {
        console.log('1.js not exist');
    }
}

(check)();