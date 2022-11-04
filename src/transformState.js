'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const a of actions) {
    switch (a.type) {
      case 'addProperties':
        const steps = a.extraData;

        for (const key in steps) {
          if (!state[key]) {
            state[key] = steps[key];
          }

          if (state[key]) {
            state[key] = steps[key];
          }
        };

        break;

      case 'removeProperties':
        const takeAway = a.keysToRemove;

        for (const name of takeAway) {
          if (state[name]) {
            delete state[name];
          }
        };

        break;

      case 'clear':
        for (const n in state) {
          delete state[n];
        };

        break;
    }
  };

  return state;
}

module.exports = transformState;
