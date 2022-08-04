'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const keyClear in state) {
        delete state[keyClear];
      }
    }

    for (const keyAdd in actions[i].extraData) {
      if (actions[i].type === 'addProperties') {
        state[keyAdd] = actions[i].extraData[keyAdd];
      }
    }

    for (const keyDell in actions[i].keysToRemove) {
      if (actions[i].type === 'removeProperties') {
        delete state[actions[i].keysToRemove[keyDell]];
      }
    }
  }
}

module.exports = transformState;
