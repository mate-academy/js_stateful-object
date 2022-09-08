'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const i in actions) {
    for (const k in actions[i]) {
      switch (actions[i][k]) {
        case 'addProperties':
          Object.assign(state, actions[i].extraData);
          break;

        case 'removeProperties':
          for (let j = 0; j < actions[i].keysToRemove.length; j++) {
            delete state[actions[i].keysToRemove[j]];
          }
          break;

        case 'clear':
          for (const m in state) {
            delete state[m];
          }
      }
    }
  }
}
module.exports = transformState;
