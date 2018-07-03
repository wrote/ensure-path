"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wroteEnsurePath;

var _util = require("util");

const LOG = (0, _util.debuglog)('@wrote/ensure-path');
/**
 * Create all directories on the way to the path.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function wroteEnsurePath(config = {}) {
  const {
    type
  } = config;
  LOG('@wrote/ensure-path called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map