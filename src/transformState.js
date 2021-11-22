'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    const { type, extraData, keysToRemove } = actions[i];

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    } else if (type === 'removeProperties') {
      if (keysToRemove.length > 1) {
        for (const key of keysToRemove) {
          delete state[key];
        }
      } else {
        delete state[keysToRemove];
      }
    } else if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
