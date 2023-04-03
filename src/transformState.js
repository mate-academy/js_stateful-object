'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case 'removeProperties':
        for (let i = 0; i < action.keysToRemove.length; i++) {
          if (state.hasOwnProperty(action.keysToRemove[i])) {
            delete state[action.keysToRemove[i]];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'Wrong input!';
    }
  }

  return state;
}

module.exports = transformState;
