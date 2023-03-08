'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      switch (action[key]) {
        case 'clear':
          for (const key2 in state) {
            delete state[key2];
          }
          break;

        case 'addProperties':
          Object.assign(state, action['extraData']);
          break;

        case 'removeProperties':
          for (const item of action['keysToRemove']) {
            delete state[item];
          }
          break;
      }
    }
  }

  return state;
}

module.exports = transformState;
