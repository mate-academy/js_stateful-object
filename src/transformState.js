'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const keys in actions) {
    if (actions[keys].type === 'addProperties') {
      Object.assign(state, actions[keys].extraData);
    }

    if (actions[keys].type === `removeProperties`) {
      for (const char of actions[keys].keysToRemove) {
        delete state[char];
      }
    }

    if (actions[keys].type === `clear`) {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
