'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const keyRemove of action.keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Error is happend ;c(wrong incoming type)');
    }
  }
}

module.exports = transformState;
