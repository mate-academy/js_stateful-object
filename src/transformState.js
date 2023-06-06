'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((item, index, array) => {
    if (item.type === 'addProperties') {
      for (const key in item.extraData) {
        state[key] = item.extraData[key];
      }
    }

    if (item.type === 'removeProperties') {
      item.keysToRemove.forEach((key) => {
        if (state[key]) {
          delete state[key];
        }
      });
    }

    if (item.type === 'clear') {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });
    }
  });
}

module.exports = transformState;
