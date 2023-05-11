'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'addProperties') {
      const extraData = action.extraData;

      for (const key in extraData) {
        state[key] = extraData[key];
      }
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
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
