'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      for (const key in obj.extraData) {
        state[key] = obj.extraData[key];
      }
    } else if (obj.type === 'removeProperties') {
      obj.keysToRemove.forEach(el => delete state[el]);
    } else if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
