'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        Object.assign(state, actions[action].extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      case 'removeProperties':
        for (const index of actions[action].keysToRemove) {
          delete state[index];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
