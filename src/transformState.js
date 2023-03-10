'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(({ type, extraData, keysToRemove }) => {
    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        if (keysToRemove && keysToRemove.length > 0) {
          keysToRemove.forEach(key => delete state[key]);
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;

      default:
        throw new Error(`Invalid action type: ${type}`);
    }
  });
}

module.exports = transformState;
