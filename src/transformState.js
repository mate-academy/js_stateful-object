'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    if (obj['type'] === 'addProperties') {
      Object.assign(state, obj['extraData']);
    }

    if (obj['type'] === 'removeProperties') {
      for (const property of obj['keysToRemove']) {
        if (state[property]) {
          delete state[property];
        }
      }
    }

    if (obj['type'] === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }
}

module.exports = transformState;
