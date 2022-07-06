'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'addProperties') {
      for (const addValues in action.extraData) {
        state[addValues] = action.extraData[addValues];
      }
    }

    if (action.type === 'removeProperties') {
      for (const removeValues of action.keysToRemove) {
        if (state[removeValues]) {
          delete state[removeValues];
        }
      }
    }

    if (action.type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  };
}

module.exports = transformState;
