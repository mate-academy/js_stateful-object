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
        for (const k of actions[key].keysToRemove) {
          delete state[k];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
