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
        for (const removeItem of action.keysToRemove) {
          delete state[removeItem];
        }
        break;
      case 'clear':
        Object.keys(state).forEach(objectValue => delete state[objectValue]);
        break;
      default:
        throw new Error(`Incorrect value: ${action.type}`);
    }
  }
}

module.exports = transformState;
