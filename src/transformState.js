'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(keys => {
    if (keys.type === 'addProperties') {
      Object.assign(state, keys.extraData);
    }

    if (keys.type === 'removeProperties') {
      keys.keysToRemove.forEach(element => {
        delete state[element];
      });
    }

    if (keys.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });
}

module.exports = transformState;
