'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        if (action.extraData) {
          Object.assign(state, action.extraData);
        }
        break;

      case 'removeProperties':
        if (action.keysToRemove) {
          for (const key of action.keysToRemove) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

module.exports = transformState;
