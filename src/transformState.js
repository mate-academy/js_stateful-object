'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const type of actions) {
    switch (type.type) {
      case 'addProperties':
        Object.assign(state, type.extraData);
        break;

      case 'removeProperties':
        for (const key of type.keysToRemove) {
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
