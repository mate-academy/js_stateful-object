'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      Object.assign(state, action['extraData']);
    } else if (action['type'] === 'removeProperties') {
      for (const property of action['keysToRemove']) {
        delete state[property];
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
