'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const keyAdd in actions[i].extraData) {
        state[keyAdd] = actions[i].extraData[keyAdd];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (
        let keyRemove = 0;
        keyRemove < actions[i].keysToRemove.length;
        keyRemove++
      ) {
        delete state[actions[i].keysToRemove[keyRemove]];
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
