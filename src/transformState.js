'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (obj.type === 'addProperties') {
      for (const key in obj.extraData) {
        state[key] = obj.extraData[key];
      }
    }

    if (obj.type === 'removeProperties') {
      for (const key of obj.keysToRemove) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
