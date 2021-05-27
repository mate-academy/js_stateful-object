'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    for (const actionKey in action) {
      if (action[actionKey] === 'addProperties') {
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
      }

      if (action[actionKey] === 'removeProperties') {
        for (let j = 0; j < action.keysToRemove.length; j++) {
          delete state[action.keysToRemove[j]];
        }
      }

      if (action[actionKey] === 'clear') {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
