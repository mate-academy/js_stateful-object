'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const f of key.keysToRemove) {
          delete state[f];
        };
        break;

      case 'clear':
        for (const y in state) {
          delete state[y];
        };
        break;
    }
  }
}

module.exports = transformState;
