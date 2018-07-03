import { resolve } from 'path'
import makePromise from 'makepromise'
import { mkdir, createWriteStream, createReadStream } from 'fs'
import spawn from 'spawncommand'
import Catchment from 'catchment'
import { equal } from 'assert'
// import { debuglog } from 'util'

// const LOG = debuglog('@wrote/ensure-path')

const TEMP_DIR = resolve(__dirname, '../temp')
const TEST_DIR_NAME = '_tests'
const TEST_DIR_NOX_NAME = 'no-execute'

/**
 * A testing context for the package.
 */
export default class Context {
  async _init() {
    try {
      const { promise } = spawn('rm', ['-rf', this.TEMP_TEST_DIR])
      await promise
      await makePromise(mkdir, [this.TEMP_TEST_DIR, 0o777])
    } catch (err) {
      if (/EEXIST/.test(err.message)) {
        throw new Error('WroteContext: Could not make temp test directory: it already exists.')
      }
      throw err
    }
  }
  /**
   * Returns path to the test directory in the temp folder.
   */
  get TEMP_TEST_DIR() {
    return resolve(TEMP_DIR, TEST_DIR_NAME)
  }
  /**
   * Returns path to the non-executable directory in the temp folder.
   */
  get TEMP_NOX_DIR() {
    return resolve(TEMP_DIR, TEST_DIR_NOX_NAME)
  }
  /**
   * Create a non-executable directory in the temp folder.
   */
  async makeNoExecutableDirectory() {
    try {
      await makePromise(mkdir, [this.TEMP_NOX_DIR, 0o666])
    } catch ({ message }) {
      if (/EEXIST/.test(message)) {
        throw new Error('WroteContext: Could not make non-executable directory: it already exists.')
      }
    }
  }
  async _destroy() {
    const promises = []
    const { promise: p1 } = spawn('rm', ['-rf', this.TEMP_TEST_DIR])
    promises.push(p1)
    const { promise: p2 } = spawn('rm', ['-rf', this.TEMP_NOX_DIR])
    promises.push(p2)
    await Promise.all(promises)
  }

  async assertCanWriteFile(path) {
    const testData = `some-test-data-${Date.now()}`
    const ws = createWriteStream(path)
    await new Promise((r) => {
      ws.end(testData, r)
    })
    const rs = createReadStream(path)

    const { promise } = new Catchment({ rs })
    const res = await promise
    equal(res, testData)
  }
}
