'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const Action of actions) {
    switch (Action.type) {
      case 'removeProperties':
        for (const keyToRemove of Action.keysToRemove) {
          if (Object.keys(state).includes(keyToRemove)) {
            delete state[keyToRemove];
          }
        }
        break;
      case 'addProperties':
        Object.assign(state, Action.extraData);
        break;
      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
