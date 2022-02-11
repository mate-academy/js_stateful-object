'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const obj of actions) {
    if (obj['type'] === 'addProperties') {
      Object.assign(state, obj['extraData']);
    } else if (obj['type'] === 'removeProperties') {
      for (const item of obj['keysToRemove']) {
        delete state[item];
      }
    } else if (obj['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
