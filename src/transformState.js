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
        for (const keyRemove of action.keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear':
        for (const remove in state) {
          delete state[remove];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
