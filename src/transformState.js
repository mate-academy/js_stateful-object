'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const command of actions) {
    switch (command.type) {
      case 'addProperties':
        for (const key in command.extraData) {
          state[key] = command.extraData[key];
        };
        break;

      case 'removeProperties':
        for (const key of command.keysToRemove) {
          delete state[key];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
    }
  }
}

module.exports = transformState;
