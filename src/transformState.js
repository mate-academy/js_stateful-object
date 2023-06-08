'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const comands of actions) {
    if (comands.type === 'addProperties') {
      for (const [key, value] of Object.entries(comands.extraData)) {
        state[key] = value;
      }
    }

    if (comands.type === 'removeProperties') {
      for (const key of Object.values(comands.keysToRemove)) {
        delete state[key];
      }
    }

    if (comands.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
