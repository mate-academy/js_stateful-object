'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const obj = actions[i];

    if (obj.type === 'addProperties') {
      for (const key in obj.extraData) {
        state[key] = obj.extraData[key];
      }
    } else if (obj.type === 'removeProperties') {
      for (const key of obj.keysToRemove) {
        delete state[key];
      }
    } else if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
