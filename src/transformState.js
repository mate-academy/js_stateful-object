'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keyRemoved of action.keysToRemove) {
          delete state[keyRemoved];
        }
        break;

      case 'clear':
        for (const keyCleared in state) {
          delete state[keyCleared];
        }
        break;

      default:
        continue;
    }
  }

  return state;
}

module.exports = transformState;
