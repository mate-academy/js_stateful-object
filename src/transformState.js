'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const addedState = action.extraData;

        Object.assign(state, addedState);
        break;
      };

      case 'removeProperties': {
        for (const keyRemove of action.keysToRemove) {
          if (state[keyRemove]) {
            delete state[keyRemove];
          }
        };
        break;
      }

      case 'clear': {
        for (const clearKey in state) {
          delete state[clearKey];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
