'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  try {
    for (const action of actions) {
      for (const type in action) {
        if (type === 'extraData') {
          for (const fieldToAdd in action[type]) {
            state[fieldToAdd] = action[type][fieldToAdd];
          }
        }

        if (type === 'keysToRemove') {
          for (const keyToRemove of action[type]) {
            delete state[keyToRemove];
          }
        }

        if (action[type] === 'clear') {
          for (const key in state) {
            delete state[key];
          }
        }
      }
    }
  } catch (error) {
    throw new Error('Invalid operation');
  }

  return state;
}

module.exports = transformState;
