import { equal, throws } from 'zoroaster/assert'
import { resolve } from 'path'
import Context from '../context'
import ensurePath from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof ensurePath, 'function')
  },
  async 'creates a path to the file'({ assertCanWriteFile, TEMP_TEST_DIR }) {
    const path = resolve(TEMP_TEST_DIR, 'path/to/temp/file.data')
    const res = await ensurePath(path)
    equal(res, path)
    await assertCanWriteFile(path)
  },
  async 'rejects when trying to create a path where cannot'({
    makeNoExecutableDirectory, TEMP_NOX_DIR,
  }) {
    await makeNoExecutableDirectory()
    const path = resolve(TEMP_NOX_DIR, 'path/to/temp/file.data')
    await throws({
      async fn() {
        await ensurePath(path)
      },
      code: 'EACCES',
      message: /permission denied/,
    })
  },
  async 'does not throw an error when dir already exists'({
    assertCanWriteFile, TEMP_TEST_DIR,
  }) {
    const path = resolve(TEMP_TEST_DIR, 'file.data')
    const res = await ensurePath(path)
    equal(res, path)
    await assertCanWriteFile(path)
    await ensurePath(path)
  },
}

export default T
