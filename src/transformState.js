'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    } else if (actions[key].type === 'removeProperties') {
      for (const kInStat in state) {
        for (let n = 0; n < actions[key].keysToRemove.length; n++) {
          if (kInStat === actions[key].keysToRemove[n]) {
            delete state[kInStat];
          }
        }
      }
    } else if (actions[key].type === 'clear') {
      for (const del in state) {
        delete state[del];
      }
    }
  }

  return state;
}

module.exports = transformState;
