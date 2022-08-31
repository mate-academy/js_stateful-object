'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act.type === 'addProperties') {
      for (const [key, value] of Object.entries(act.extraData)) {
        state[key] = value;
      }
    }

    if (act.type === 'removeProperties') {
      for (const key of act.keysToRemove) {
        delete state[key];
      }
    }

    if (act.type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
