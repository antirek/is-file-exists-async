
function isFileExists(file) {
    return fsPromises.access(file, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false)
}

module.exports = isFileExists;