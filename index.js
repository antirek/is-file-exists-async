const fs = require('fs');

function isFileExists(file) {
    return fs.promises.access(file, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false)
}

module.exports = isFileExists;