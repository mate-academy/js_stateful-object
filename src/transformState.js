'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keysToRemove of action.keysToRemove) {
          if (state.hasOwnProperty(keysToRemove)) {
            delete state[keysToRemove];
          }
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;
    }
  }
}

module.exports = transformState;
