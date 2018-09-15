import { equal, throws } from 'zoroaster/assert'
import { join } from 'path'
import Context from '../context'
import ensurePath from '../../src'
import TempContext from 'temp-context'

/** @type {Object.<string, (c: Context, tc: TempContext)>} */
const T = {
  context: [Context, TempContext],
  'is a function'() {
    equal(typeof ensurePath, 'function')
  },
  async 'creates a path to the file'(
    { assertCanWriteFile }, { TEMP },
  ) {
    const path = join(TEMP, 'path/to/temp/file.data')
    const res = await ensurePath(path)
    equal(res, path)
    await assertCanWriteFile(path)
  },
  async 'rejects when trying to create a path where cannot'(
    { makeNoExecutableDirectory }, { TEMP },
  ) {
    const ne = join(TEMP, 'non-executable')
    const path = join(ne, '/test/file.data')
    await makeNoExecutableDirectory(ne)
    await throws({
      fn: ensurePath,
      args: path,
      code: 'EACCES',
      message: /permission denied/,
    })
  },
  async 'does not throw an error when dir already exists'(
    { assertCanWriteFile }, { TEMP },
  ) {
    const path = join(TEMP, 'file.data')
    const res = await ensurePath(path)
    equal(res, path)
    await assertCanWriteFile(path)
    await ensurePath(path)
  },
}

export default T
