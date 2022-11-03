'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const a of actions) {
    if (a.type === 'addProperties') {
      const steps = a.extraData;

      for (const key in steps) {
        if (!state[key]) {
          state[key] = steps[key];
        }

        if (state[key]) {
          state[key] = steps[key];
        }
      }
    }

    if (a.type === 'removeProperties') {
      const takeAway = a.keysToRemove;

      for (const name of takeAway) {
        if (state[name]) {
          delete state[name];
        }
      }
    }

    if (a.type === 'clear') {
      for (const n in state) {
        delete state[n];
      }
    }
  };

  return state;
}

module.exports = transformState;
