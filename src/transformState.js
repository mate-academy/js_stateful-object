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
        Object.keys(state).forEach(key => {
          if (action.keysToRemove.includes(key)) {
            delete state[key];
          }
        });
        break;

      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

module.exports = transformState;
