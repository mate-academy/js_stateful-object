'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;

      case 'removeProperties':
        for (const del of actions[key].keysToRemove) {
          delete state[del];
        }
        break;

      case 'clear':
        for (const k in state) {
          delete state[k];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
