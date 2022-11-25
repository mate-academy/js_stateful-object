'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const singleAction of actions) {
    switch (singleAction.type) {
      case 'addProperties':
        Object.assign(state, singleAction.extraData);
        break;

      case 'removeProperties':
        for (const key of singleAction.keysToRemove) {
          delete state[key];
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
