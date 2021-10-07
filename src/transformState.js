'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObject of actions) {
    switch (actionObject.type) {
      case 'addProperties':
        for (const key in actionObject.extraData) {
          state[key] = actionObject.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const propertyForRemove of actionObject.keysToRemove) {
          delete state[propertyForRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'Error';
    }
  }

  return state;
}

module.exports = transformState;
