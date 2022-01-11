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
        for (const key of actions[i].keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const keyI in state) {
          delete state[keyI];
        }
        break;
    }
  }
}

module.exports = transformState;
