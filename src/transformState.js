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

      case 'removeProperties':
        if (keysToRemove.length > 1) {
          for (const key of keysToRemove) {
            delete state[key];
          }
        } else {
          delete state[keysToRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}
module.exports = transformState;