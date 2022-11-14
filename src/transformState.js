'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, extraData, keysToRemove } = actions[i];

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const key in keysToRemove) {
        delete state[keysToRemove[key]];
      }
    }

    if (type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  }
}

module.exports = transformState;
