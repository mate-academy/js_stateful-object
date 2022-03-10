'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    switch (value.type) {
      case 'addProperties':
        Object.assign(state, value.extraData);

        break;
      case 'removeProperties':
        value.keysToRemove.forEach(key => delete state[key]);

        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);

        break;
      default:
        return;
    }
  }
}

module.exports = transformState;
