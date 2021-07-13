'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (const keys of actions[i].keysToRemove) {
          delete state[keys];
        };
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        };
        break;
    }
  }
}

module.exports = transformState;
