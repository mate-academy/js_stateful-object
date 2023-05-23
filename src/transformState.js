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
      case 'removeProperties':
        for (const del of actions[action].keysToRemove) {
          delete state[del];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
