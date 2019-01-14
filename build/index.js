const { mkdir } = require('fs');
let makePromise = require('makepromise'); if (makePromise && makePromise.__esModule) makePromise = makePromise.default;
const { dirname } = require('path');

/**
 * Makes sure that a file can be created by creating all directories to which it belongs, e.g., `ensurePath('~/path/to/wrote.data')` will attempt to create `~/path/to` directory recursively.
 * @param {string} path Path to the file
 * @throws {Error} When the first folder in the path is non-executable
 */
               async function ensurePath(path) {
  const dir = dirname(path)
  try {
    await make(dir)
    return path
  } catch (err) {
    if (/EEXIST/.test(err.message) && err.message.indexOf(dir) != -1) {
      return path
    }
    throw err
  }
}

/**
 * Recursive promise-based mkdir.
 * @param {string} dir Path to the directory to be created
 */
async function make(dir) {
  try {
    await makePromise(mkdir, dir)
  } catch (err) {
    if (err.code == 'ENOENT') {
      const parentDir = dirname(dir)
      await make(parentDir)
      await make(dir)
    } else if (err.code != 'EEXIST') { // created in parallel
      throw err
    }
  }
}


module.exports = ensurePath