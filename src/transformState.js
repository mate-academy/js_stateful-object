'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const keys of actions) {
    switch (keys.type) {
      case 'addProperties':
        Object.assign(state, keys.extraData);
        break;

      case 'removeProperties':
        for (const key of keys.keysToRemove) {
          delete state[key];
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
