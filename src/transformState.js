'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties' :
        for (const removableKey of keysToRemove) {
          delete state[removableKey];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
      default:break;
    }
  }

  return state;
}

module.exports = transformState;
