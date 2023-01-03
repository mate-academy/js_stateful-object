'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        for (const propertie in action.extraData) {
          state[propertie] = action.extraData[propertie];
        }
        break;

      case 'removeProperties':
        for (const propertie of action.keysToRemove) {
          delete state[propertie];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('unknown command');
    }
  }

  return state;
}

module.exports = transformState;
