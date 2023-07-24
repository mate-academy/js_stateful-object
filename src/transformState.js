'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const data in action.extraData) {
          state[data] = action.extraData[data];
        };

        break;

      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        };

        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);

        break;
    }
  }
}

module.exports = transformState;
