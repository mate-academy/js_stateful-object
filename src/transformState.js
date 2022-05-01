'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, extraData, keysToRemove } = actions[i];

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    } else if (type === 'removeProperties') {
      for (const key in state) {
        for (let n = 0; n < keysToRemove.length; n++) {
          if (key === keysToRemove[n]) {
            delete state[key];
          }
        }
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
