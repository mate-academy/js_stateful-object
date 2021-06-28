'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    if (actions[action].type === 'addProperties') {
      for (const prop in actions[action]['extraData']) {
        state[prop] = actions[action]['extraData'][prop];
      }
    } else if (actions[action].type === 'removeProperties') {
      for (const prop of actions[action]['keysToRemove']) {
        if (state.hasOwnProperty(prop)) {
          delete state[prop];
        }
      }
    } else if (actions[action].type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
