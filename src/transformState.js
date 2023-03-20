'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        for (const i in obj.extraData) {
          state[i] = obj.extraData[i];
        }
        break;

      case 'removeProperties':
        for (const i in obj.keysToRemove) {
          delete state[obj.keysToRemove[i]];
        }
        break;

      default:
        for (const i in state) {
          delete state[i];
        }
    }
  }
}

module.exports = transformState;
