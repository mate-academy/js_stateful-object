'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(properties => delete state[properties]);
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
