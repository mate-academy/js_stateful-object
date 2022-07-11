'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const keyAdd in actions[i].extraData) {
          state[keyAdd] = actions[i].extraData[keyAdd];
        }
        break;

      case 'removeProperties':
        for (const keyRemove of actions[i].keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear':
        for (const keyClear in state) {
          delete state[keyClear];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
