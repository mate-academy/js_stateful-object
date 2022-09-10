'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const command of actions) {
    if (command.type === 'addProperties') {
      for (const key in command.extraData) {
        state[key] = command.extraData[key];
      }
    }

    if (command.type === 'removeProperties') {
      for (const key of command.keysToRemove) {
        delete state[key];
      }
    }

    if (command.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
