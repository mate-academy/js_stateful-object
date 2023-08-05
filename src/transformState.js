'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.map(({ type, extraData, keysToRemove }) => {
    switch (type) {
      case 'addProperties':
        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        Object.keys(state).map(key => {
          delete state[key];
        });
        break;

      default:
        throw new Error('Invalid action type.');
    }
  });
}

module.exports = transformState;
