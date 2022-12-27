'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      Object.assign(state, action['extraData']);
    }

    if (action['type'] === 'removeProperties') {
      for (const el of action['keysToRemove']) {
        delete state[el];
      }
    }

    if (action['type'] === 'clear') {
      for (const el in state) {
        delete state[el];
      }
    }
  }

  return state;
}

module.exports = transformState;
