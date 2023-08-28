'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addPropertyExtraData = 'addProperties';
  const removePropertyKeys = 'removeProperties';
  const clearState = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case addPropertyExtraData:
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;
      case removePropertyKeys:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case clearState:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
