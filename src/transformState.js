'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      default:
        for (const key of action.keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
    }
  }

  return state;
}

module.exports = transformState;
