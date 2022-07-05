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
        for (const removeKeys of action.keysToRemove) {
          if (state.hasOwnProperty(removeKeys)) {
            delete state[removeKeys];
          }
        }
        break;

      case 'clear':
        for (const removeProperties in state) {
          delete state[removeProperties];
        }
        break;

      default:
        return 'Enter an existing type';
    }
  }

  return state;
}

module.exports = transformState;
