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
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      default:
        throw new Error(`Unknown action type: "${action.type}"`);
    }
  }
}

module.exports = transformState;
