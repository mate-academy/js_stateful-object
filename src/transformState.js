'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((obj) => {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const key of obj.keysToRemove) {
        delete state[key];
      }
    }

    if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}

module.exports = transformState;
