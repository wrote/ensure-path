import { debuglog } from 'util'

const LOG = debuglog('@wrote/ensure-path')

/**
 * Create all directories on the way to the path.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function wroteEnsurePath(config = {}) {
  const {
    type,
  } = config
  LOG('@wrote/ensure-path called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
