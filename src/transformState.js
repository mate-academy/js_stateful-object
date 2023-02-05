'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const dataToAdd = action.extraData;

        Object.assign(state, dataToAdd);
        break;
      }

      case 'removeProperties': {
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
