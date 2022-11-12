'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const a of actions) {
    switch (a.type) {
      case 'addProperties':
        Object.assign(state, a.extraData);

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
}

module.exports = transformState;
