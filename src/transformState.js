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
        for (const char of action.keysToRemove) {
          delete state[char];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return 'some ERR';
    }
  }
}

module.exports = transformState;
