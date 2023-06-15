'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const { type } = action;

    if (type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (type === 'removeProperties') {
      action.keysToRemove.forEach(key => {
        delete state[key];
      });
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
