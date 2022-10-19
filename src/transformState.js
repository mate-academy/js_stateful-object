'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        const removeKey = actions[i].keysToRemove[j];

        delete state[removeKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
