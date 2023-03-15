'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  try {
    for (const action of actions) {
      for (const type in action) {
        switch (true) {
          case type === 'extraData':
            for (const fieldToAdd in action[type]) {
              state[fieldToAdd] = action[type][fieldToAdd];
            };
            break;
          case type === 'keysToRemove':
            for (const keyToRemove of action[type]) {
              delete state[keyToRemove];
            };
            break;
          case action[type] === 'clear':
            for (const key in state) {
              delete state[key];
            };
            break;
        }
      }
    }
  } catch (error) {
    throw new Error('Invalid operation');
  }

  return state;
}

module.exports = transformState;
