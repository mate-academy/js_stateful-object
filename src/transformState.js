'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    const actionType = {
      [type]: type,
    };

    switch (type) {
      case actionType.clear:
        for (const key in state) {
          delete state[key];
        }
        break;

      case actionType.addProperties:
        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case actionType.removeProperties:
        keysToRemove.forEach(element => delete state[element]);
        break;

      default:
        return 'invalid action';
    }
  }

  return state;
}

module.exports = transformState;
