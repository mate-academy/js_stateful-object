'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        if (action.extraData && typeof action.extraData === 'object') {
          Object.assign(state, action.extraData);
        }
        break;

      case 'removeProperties':
        if (action.keysToRemove && Array.isArray(action.keysToRemove)) {
          for (const key of action.keysToRemove) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
