'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData: extra, keysToRemove: keys } of actions) {
    switch (type) {
      case 'addProperties':
        for (const a in extra) {
          state[a] = extra[a];
        }
        break;

      case 'removeProperties':
        for (const r in keys) {
          delete state[keys[r]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
