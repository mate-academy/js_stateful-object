'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        for (const addItem in action.extraData) {
          state[addItem] = action.extraData[addItem];
        }
        break;
      }

      case 'removeProperties': {
        for (const removeItem of action.keysToRemove) {
          delete state[removeItem];
        }
        break;
      }

      case 'clear': {
        for (const st in state) {
          delete state[st];
        }
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
