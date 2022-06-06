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
        continue;
      case 'clear':
        for (const stateProp in state) {
          delete state[stateProp];
        }
        continue;
      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
        continue;
    }
  }

  return state;
}

module.exports = transformState;
