'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const el of actions) {
    if (el.type === 'addProperties') {
      Object.assign(state, el.extraData);
    }

    if (el.type === 'removeProperties') {
      for (const item of el.keysToRemove) {
        delete state[item];
      }
    }

    if (el.type === 'clear') {
      for (const item in state) {
        delete state[item];
      }
    }
  }
}

module.exports = transformState;
