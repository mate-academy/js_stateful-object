'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const parametr of actions) {
    switch (parametr.type) {
      case 'addProperties':
        Object.assign(state, parametr.extraData);
        break;

      case 'removeProperties':
        for (const key of parametr.keysToRemove) {
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
