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
        for (const keyRemove of action.keysToRemove) {
          delete state[keyRemove];
        }

        break;

      case 'clear':
        for (const keyClear in state) {
          delete state[keyClear];
        }

        break;

      default:
        throw new Error('Wrong object properties');
    }
  }
}
module.exports = transformState;
