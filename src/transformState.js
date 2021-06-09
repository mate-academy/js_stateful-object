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
        for (const keys of key.keysToRemove) {
          delete state[keys];
        }
        break;
      case 'clear':
        for (const k in state) {
          delete state[k];
        }
        break;
    }
  }
}

module.exports = transformState;
