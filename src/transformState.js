'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    if (value.type === 'addProperties') {
      Object.assign(state, value['extraData']);
    }

    if (value.type === 'removeProperties') {
      value.keysToRemove.forEach(key => delete state[key]);
    }

    if (value.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
