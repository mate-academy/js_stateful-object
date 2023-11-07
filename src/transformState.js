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
        for (const key2 in action.keysToRemove) {
          delete state[action.keysToRemove[key2]];
        };
        break;

      case 'clear':
        for (const key2 in state) {
          delete state[key2];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
