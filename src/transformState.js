'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const ch of actions) {
    if (ch.type === 'addProperties') {
      Object.assign(state, ch.extraData);
    }

    if (ch.type === 'removeProperties') {
      for (const del of ch.keysToRemove) {
        delete state[del];
      }
    }

    if (ch.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
