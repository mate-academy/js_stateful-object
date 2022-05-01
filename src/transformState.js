'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    // add
    if (action.type === 'addProperties') {
      for (const keyToAdd in action.extraData) {
        state[keyToAdd] = action.extraData[keyToAdd];
      }
    }

    // remove
    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete state[keyToRemove];
      }
    }

    // clear
    if (action.type === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }
  }
}

module.exports = transformState;
