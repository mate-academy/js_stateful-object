'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const el of actions) {
    if (el.type === 'addProperties') {
      Object.assign(state, el.extraData);
    } else if (el.type === 'removeProperties') {
      for (const key of el.keysToRemove) {
        delete state[key];
      }
    } else if (el.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
