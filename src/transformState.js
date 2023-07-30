'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value in actions) {
    switch (actions[value].type) {
      case 'clear':
        for (const variableKey in state) {
          delete state[variableKey];
        }
        break;

      case 'addProperties':
        Object.assign(state, actions[value].extraData);
        break;

      case 'removeProperties':
        for (const keys in actions[value].keysToRemove) {
          const deletePropety = actions[value].keysToRemove[keys];

          delete state[deletePropety];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
