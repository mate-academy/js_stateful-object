'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const resObj = state;

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(resObj, actions[i].extraData);
        break;

      case 'removeProperties':
        for (const ch of actions[i].keysToRemove) {
          delete resObj[ch];
        }
        break;

      case 'clear':
        for (const q in resObj) {
          delete resObj[q];
        }
        break;
    }
  }

  return resObj;
}

module.exports = transformState;
