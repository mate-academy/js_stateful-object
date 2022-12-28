'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const o in state) {
          delete state[o];
        };
        break;

      case 'removeProperties':
        for (const i of action.keysToRemove) {
          delete state[i];
        };
        break;

      case 'addProperties':
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
