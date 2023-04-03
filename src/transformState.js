'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (const key of i.keysToRemove) {
        delete state[key];
      }
    }

    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
