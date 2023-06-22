'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties' : 
        for (const keyToAdd in actions[i].extraData) {
          state[keyToAdd] = actions[i].extraData[keyToAdd];
        }
        break;
      case 'removeProperties' :
        for (
          let keyToRemove = 0;
          keyToRemove < actions[i].keysToRemove.length;
          keyToRemove++
        ) {
          delete state[actions[i].keysToRemove[keyToRemove]];
        }
        break;
      case 'clear' :
        for (const keyClear in state) {
          delete state[keyClear];
        }
      break;
    }
  }

  return state;
}

module.exports = transformState;
