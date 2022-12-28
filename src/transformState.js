'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
      case 'removeProperties':
        for (const removekey of action.keysToRemove) {
          delete state[removekey];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      default:
        throw Error('error')
    }
  }
}

module.exports = transformState;
