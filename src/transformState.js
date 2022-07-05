'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const act = action.type;
    const data = action.extraData;

    switch (act) {
      case 'addProperties':
        for (const key in data) {
          state[key] = data[key];
        }
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return 'No actions needed';
    }
  }
}

module.exports = transformState;
