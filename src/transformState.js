'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const prop in action.extraData) {
          state[prop] = action.extraData[prop];
        }
        break;
      case 'clear':
        for (const stateProp in state) {
          delete state[stateProp];
        }
        break;
      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
