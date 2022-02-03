'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    for (const i in actions[key]) {
      for (const b in actions[key][i]) {
        if (i === 'keysToRemove') {
          delete state[actions[key][i][b]];
        } else if (i === 'extraData') {
          state[b] = actions[key][i][b];
        } else if (actions[key][i] === 'clear') {
          for (const k in state) {
            delete state[k];
          }
        }
      }
    }
  }
}

module.exports = transformState;
