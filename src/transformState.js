'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const removeData of action.keysToRemove) {
          delete state[removeData];
        };
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      default:
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
