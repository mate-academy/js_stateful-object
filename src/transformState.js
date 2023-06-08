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
        for (const member in state) {
          delete state[member];
        }

        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
