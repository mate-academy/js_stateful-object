'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  try {
    for (const action of actions) {
      switch (action['type']) {
        case 'addProperties':
          for (const fieldToAdd in action['extraData']) {
            state[fieldToAdd] = action['extraData'][fieldToAdd];
          };
          break;
        case 'removeProperties':
          for (const keyToRemove of action['keysToRemove']) {
            delete state[keyToRemove];
          };
          break;
        case 'clear':
          for (const key in state) {
            delete state[key];
          };
          break;
      }
    }
  } catch (error) {
    throw new Error('Invalid operation');
  }

  return state;
}

module.exports = transformState;
