'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObjects of actions) {
    switch (actionObjects.type) {
      case 'addProperties':
        for (const data in actionObjects.extraData) {
          state[data] = actionObjects.extraData[data];
        }
        break;
      case 'removeProperties':
        for (const aKeyToRemove of actionObjects.keysToRemove) {
          if (aKeyToRemove in state) {
            delete state[aKeyToRemove];
          }
        }
        break;
      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
    }
  }
}

module.exports = transformState;
