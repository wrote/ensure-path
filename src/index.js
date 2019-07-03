import { mkdir, mkdirSync } from 'fs'
import makePromise from 'makepromise'
import { dirname } from 'path'

/**
 * Makes sure that a file can be created by creating all directories to which it belongs to, e.g., `ensurePath('~/path/to/wrote.data')` will attempt to create `~/path/to` directory recursively.
 * @param {string} path The path to the file.
 * @throws {Error} When the first folder in the path is non-executable.
 */
export default async function ensurePath(path) {
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

/**
 * Makes sure that a file can be created by creating all directories to which it belongs to synchronously, e.g., `ensurePath('~/path/to/wrote.data')` will attempt to create `~/path/to` directory recursively.
 * @param {string} path The path to the file.
 * @throws {Error} When the first folder in the path is non-executable.
 */
export function ensurePathSync(path) {
  const dir = dirname(path)
  try {
    makeSync(dir)
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
function makeSync(dir) {
  try {
    mkdirSync(dir)
  } catch (err) {
    if (err.code == 'ENOENT') {
      const parentDir = dirname(dir)
      makeSync(parentDir)
      makeSync(dir)
    } else if (err.code != 'EEXIST') { // created in parallel
      throw err
    }
  }
}