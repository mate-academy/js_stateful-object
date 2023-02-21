'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      const keysToRemove = action.keysToRemove;

      for (let j = 0; j < keysToRemove.length; j++) {
        const key = keysToRemove[j];

        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
