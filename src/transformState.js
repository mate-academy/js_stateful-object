'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const command of actions) {
    if (command.type === 'addProperties') {
      Object.assign(state, command.extraData);
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

  return state;
}

module.exports = transformState;
