'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'addProperties') {
      for (const key in object.extraData) {
        state[key] = object.extraData[key];
      }
    } else if (object.type === 'removeProperties') {
      for (const item of object.keysToRemove) {
        delete state[item];
      }
    } else if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
