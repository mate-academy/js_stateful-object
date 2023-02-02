'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const removeKey of action.keysToRemove) {
          delete state[removeKey];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }
  }
}

module.exports = transformState;
