'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionType = actions[i].type;

    if (actionType === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actionType === 'removeProperties') {
      const keysToRemove = actions[i].keysToRemove;

      for (const key of keysToRemove) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    } else if (actionType === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
