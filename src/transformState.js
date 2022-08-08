'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const [keyOfAction, valueOfAction] of Object.entries(actions[i])) {
          for (const [extraDataKey, extraDataValue]
            of Object.entries(valueOfAction)) {
            if (keyOfAction === 'extraData') {
              state[extraDataKey] = extraDataValue;
            }
          }
        }
        break;

      case 'removeProperties':
        for (const keyOfRemove of actions[i].keysToRemove) {
          delete state[keyOfRemove];
        }
        break;
      case 'clear':
        for (const keyOfState of Object.keys(state)) {
          delete state[keyOfState];
        }
        break;
      default:
        return null;
    }
  }
}

module.exports = transformState;
