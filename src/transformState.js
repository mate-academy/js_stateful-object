'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;
      case 'removeProperties':
        for (const kInStat in state) {
          for (let n = 0; n < actions[key].keysToRemove.length; n++) {
            if (kInStat === actions[key].keysToRemove[n]) {
              delete state[kInStat];
            }
          }
        }
        break;
      case 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;
      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
