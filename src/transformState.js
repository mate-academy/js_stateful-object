'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let resObj = state;

  for (let i = 0; i < actions.length; i++) {
    for (const key in actions[i]) {
      switch (actions[i][key]) {
        case 'addProperties':
          resObj = Object.assign(state, actions[i].extraData);
          break;

        case 'removeProperties':
          for (const ch of actions[i].keysToRemove) {
            delete resObj[ch];
          }
          break;

        case 'clear':
          for (const q in state) {
            delete state[q];
          }
          break;
      }
    }
  }

  return resObj;
}

module.exports = transformState;
