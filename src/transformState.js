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

    if (el.type === 'clear') {
      for (const all in state) {
        delete state[all];
      }
    }

    if (el.type === 'removeProperties') {
      for (const del of el.keysToRemove) {
        delete state[del];
      }
    }
  }

  return state;
}

module.exports = transformState;
