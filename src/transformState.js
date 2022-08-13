'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type } = actions[i];

    if (type === 'addProperties') {
      const { extraData } = actions[i];

      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      const { keysToRemove } = actions[i];

      for (const property of keysToRemove) {
        delete state[property];
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
