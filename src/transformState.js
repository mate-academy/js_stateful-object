'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(el => {
    if (el.type === 'addProperties') {
      Object.assign(state, el.extraData);
    }

    if (el.type === 'removeProperties') {
      el.keysToRemove.forEach(key => {
        delete state[key];
      });
    }

    if (el.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}

module.exports = transformState;
