'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(result, actions[i].extraData);
    }

    if (actions[i].type === 'clear') {
      for (const key in result) {
        delete result[key];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const keys in result) {
        if (actions[i].keysToRemove.toString().includes(keys)) {
          delete result[keys];
        }
      }
    }
  }

  return (result);
}

module.exports = transformState;
