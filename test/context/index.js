import { join } from 'path'
import makePromise from 'makepromise'
import { mkdir, createWriteStream, createReadStream } from 'fs'
import { collect } from 'catchment'
import { equal } from 'assert'

/**
 * A testing context for the package.
 */
export default class Context {
  /**
   * Create a non-executable directory in the temp folder.
   */
  async makeNoExecutableDirectory(path) {
    await makePromise(mkdir, [path, 0o666])
  }

  async assertCanWriteFile(path) {
    const testData = `some-test-data-${Date.now()}`
    const ws = createWriteStream(path)
    await new Promise((r) => {
      ws.end(testData, r)
    })
    const rs = createReadStream(path)
    const res = await collect(rs)
    equal(res, testData)
  }
}
