'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let k = 0; k < actions.length; k++) {
    if (actions[k].type === 'clear') {
      for (const x in state) {
        delete state[x];
      }
    }

    if (actions[k].type === 'removeProperties') {
      for (const ch of actions[k].keysToRemove) {
        if (state[ch] !== undefined) {
          delete state[ch];
        }
      }
    }

    for (const ch in actions[k].extraData) {
      if (actions[k].type === 'addProperties') {
        state[ch] = actions[k].extraData[ch];
      }
    }
  }
}

module.exports = transformState;
