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
      for (const j of i.keysToRemove) {
        delete state[j];
      }
    }

    if (i.type === 'clear') {
      for (const a in state) {
        delete state[a];
      }
    }
  }

  return state;
}

module.exports = transformState;
