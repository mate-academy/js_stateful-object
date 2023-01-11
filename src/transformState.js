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
      for (let j = 0; j < keysToRemove.length; j++) {
        if (state.hasOwnProperty(keysToRemove[j])) {
          delete state[keysToRemove[j]];
        }
      }
    } else if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
