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
        action.keysToRemove.forEach(property => delete state[property]);
        break;

      case 'clear':
        Object.keys(state).forEach(property => delete state[property]);
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
