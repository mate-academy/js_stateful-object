'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const command of actions) {
    switch (command.type) {
      case 'addProperties':
        Object.assign(state, command.extraData);
        break;

      case 'removeProperties':
        for (const names of command.keysToRemove) {
          delete state[names];
        }
        break;

      case 'clear':
        for (const allPropretys in state) {
          delete state[allPropretys];
        }
    }
  }
}

module.exports = transformState;
