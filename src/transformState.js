'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties' :
        for (const key in obj.extraData) {
          state[key] = obj.extraData[key];
        }

        break;

      case 'removeProperties':
        for (const j of obj.keysToRemove) {
          delete state[j];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
