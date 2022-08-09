'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const { extraData } = action;

        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        for (const keyOfRemove of action.keysToRemove) {
          delete state[keyOfRemove];
        }
        break;
      case 'clear':
        for (const keyOfState of Object.keys(state)) {
          delete state[keyOfState];
        }
        break;
      default:
        throw new Error(`Unknown action type: ${actions.type}`);
    }
  }
}

module.exports = transformState;
