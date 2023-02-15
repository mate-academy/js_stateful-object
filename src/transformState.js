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
        for (const item of action.keysToRemove) {
          delete state[item];
        }
        break;

      case 'clear':
        for (const itemOfState in state) {
          delete state[itemOfState];
        }
        break;

      default:
        throw new Error('Error');
    }
  }
}

module.exports = transformState;
