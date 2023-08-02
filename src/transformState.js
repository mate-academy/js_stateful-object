'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        Object.assign(state, action.extraData);
        break;
      }

      case 'removeProperties': {
        for (const keyToRemove of action.keysToRemove) {
          delete state[keyToRemove];
        }
        break;
      }

      case 'clear': {
        const keysToClear = Object.keys(state);

        for (const keyToClear of keysToClear) {
          delete state[keyToClear];
        }
        break;
      }

      default:
        throw new Error();
    }
  }

  return state;
}

module.exports = transformState;
