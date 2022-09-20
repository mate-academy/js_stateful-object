'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    switch (action.type) {
      case 'addProperties':
        for (const data in action.extraData) {
          state[data] = (action.extraData)[data];
        }
        break;
      case 'removeProperties':
        for (let j = 0; j < (action.keysToRemove).length; j++) {
          delete state[action.keysToRemove[j]];
        }
        break;
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
    }
  }
}

module.exports = transformState;
