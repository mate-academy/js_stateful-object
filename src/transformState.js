'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        };

        break;

      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        for (const keyRemove of action.keysToRemove) {
          delete state[keyRemove];
        };

        break;

      default:
        return 'Error';
    }
  }
}

module.exports = transformState;
