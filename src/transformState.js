'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        Object.keys(action.extraData).forEach(dataKey => {
          state[dataKey] = action.extraData[dataKey];
        });
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(keyRemove => {
          delete state[keyRemove];
        });
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  });
}

module.exports = transformState;
