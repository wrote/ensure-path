import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import wroteEnsurePath from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof wroteEnsurePath, 'function')
  },
  async 'calls package without error'() {
    await wroteEnsurePath()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await wroteEnsurePath({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
