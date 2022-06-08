'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    if (item.type === 'addProperties') {
      Object.assign(state, item.extraData);
    }

    if (item.type === 'removeProperties') {
      const removeArray = item.keysToRemove;

      for (const key of removeArray) {
        delete state[key];
      }
    }

    if (item.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
