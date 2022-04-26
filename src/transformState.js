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
      for (const del of i.keysToRemove) {
        delete state[del];
      }
    }

    if (i.type === 'clear') {
      for (const all in state) {
        delete state[all];
      }
    }
  }
}

module.exports = transformState;
