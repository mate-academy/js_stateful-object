'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        keysToRemove.forEach(element => delete state[element]);
    }
  }

  return state;
}

module.exports = transformState;
