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
        for (const y of key.keysToRemove) {
          delete state[y];
        }
        break;

      case 'clear':
        for (const part in state) {
          delete state[part];
        }
        break;
    }
  }
}

module.exports = transformState;
