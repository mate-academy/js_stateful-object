'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'addProperties':
        for (const item in action) {
          if (item === 'extraData') {
            Object.assign(state, action[item]);
          }
        }
        break;

      case 'removeProperties':
        for (const key of action['keysToRemove']) {
          delete state[key];
        }
        break;

      default: return 'Something went wrong!';
    }
  }

  return state;
}

module.exports = transformState;
