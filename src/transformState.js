'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        const { extraData } = object;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        const { keysToRemove } = object;

        for (let i = 0; i < keysToRemove.length; i++) {
          delete state[keysToRemove[i]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('unknown action type');
    }
  }
}

module.exports = transformState;
