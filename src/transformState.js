'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        removeProperties(action, state);
        break;
      case 'clear':
        for (const key1 in state) {
          delete state[key1];
        }
        break;
      default:
        throw new Error(`Unknown action type ${action.type}.`);
    }
  }

  return state;
}

function removeProperties(a, b) {
  for (const property of a.keysToRemove) {
    delete b[property];
  }
}

module.exports = transformState;
