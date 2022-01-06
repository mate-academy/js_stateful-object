'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const removeKey of action.keysToRemove) {
          delete state[removeKey];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;
    }
  }
  return state;
}

module.exports = transformState;
