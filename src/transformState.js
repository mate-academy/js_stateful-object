'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const keyToAdd in actions[i].extraData) {
        state[keyToAdd] = actions[i].extraData[keyToAdd];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (
        let keyToRemove = 0;
        keyToRemove < actions[i].keysToRemove.length;
        keyToRemove++
      ) {
        delete state[actions[i].keysToRemove[keyToRemove]];
      }
    } else if (actions[i].type === 'clear') {
      for (const keyClear in state) {
        delete state[keyClear];
      }
    }
  }

  return state;
}

module.exports = transformState;
