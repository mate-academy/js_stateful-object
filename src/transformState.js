'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        const takeAway = action.keysToRemove;

        for (const name of takeAway) {
          if (state.hasOwnProperty(name)) {
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
