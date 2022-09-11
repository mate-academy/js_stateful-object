'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const key in result) {
        delete result[key];
      }
    }

    if (actions[i].type === 'addProperties') {
      for (const key in actions[i].extraData) {
        state[key] = actions[i].extraData[key];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const key in actions[i].keysToRemove) {
        delete state[actions[i].keysToRemove[key]];
      }
    }
  }

  return result;
}

module.exports = transformState;
