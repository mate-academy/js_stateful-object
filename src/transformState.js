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
        removeProperties(state, action.keysToRemove);
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;

      default:
        throw new Error('You make mistake in type actions: ' + action.type);
    }
  }
}

function removeProperties(state, keys) {
  for (const key of keys) {
    delete state[key];
  }
}

module.exports = transformState;
