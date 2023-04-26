'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const current of actions) {
    if (current.type === 'addProperties') {
      Object.assign(state, ...[current.extraData]);
    }

    if (current.type === 'removeProperties') {
      const removeKeys = current.keysToRemove;

      removeKeys.forEach(function(item, i) {
        delete state[item];
      });
    }

    if (current.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
