'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(obj => {
    const { type } = obj;

    if (type === 'addProperties') {
      const { extraData } = obj;

      Object.assign(state, extraData);
    }

    if (type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }

    if (type === 'removeProperties') {
      const { keysToRemove } = obj;

      keysToRemove.forEach(key => delete state[key]);
    }
  });
}

module.exports = transformState;
