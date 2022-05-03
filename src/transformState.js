'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const keyToAdd in action.extraData) {
          state[keyToAdd] = action.extraData[keyToAdd];
        }
        break;
      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
        break;
      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
      default:
        throw new Error('wrong input');
    }
  }
}

module.exports = transformState;
