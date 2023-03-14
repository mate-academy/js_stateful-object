'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(property => delete state[property]);
        break;
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  });
}

module.exports = transformState;
