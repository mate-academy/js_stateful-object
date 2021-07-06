'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;

      case 'removeProperties':
        for (const keys in actions[key].keysToRemove) {
          delete state[actions[key].keysToRemove[keys]];
        }
        break;

      case 'clear':
        for (const row in state) {
          delete state[row];
        }
    }
  }

  return state;
}

module.exports = transformState;
