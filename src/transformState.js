'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      for (const i in obj.extraData) {
        state[i] = obj.extraData[i];
      }
    }

    if (obj.type === 'removeProperties') {
      for (const i of obj.keysToRemove) {
        if (state[i]) {
          delete state[i];
        }
      }
    }

    if (obj.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  }

  return state;
}

module.exports = transformState;
