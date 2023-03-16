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
        action.keysToRemove.forEach(key => delete state[key]);
        break;

      case 'clear':
        clearState(state);
        break;

      default:
        return null;
    }
  }

  return state;
}

function clearState(state) {
  for (const key in state) {
    delete state[key];
  }
}
module.exports = transformState;
