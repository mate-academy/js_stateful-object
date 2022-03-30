'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    if (item.type === 'addProperties') {
      const { extraData } = item;

      Object.assign(state, extraData);
    } else if (item.type === 'removeProperties') {
      const { keysToRemove } = item;

      for (const key in state) {
        if (keysToRemove.includes(key)) {
          delete state[key];
        }
      }
    } else if (item.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
