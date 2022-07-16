'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const newObj = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newObj, action.extraData);
        break;

      case 'removeProperties':
        for (const i of action.keysToRemove) {
          delete newObj[i];
        }
        break;

      default:
        for (const k in newObj) {
          delete newObj[k];
        }
    }
  }

  return newObj;
}

module.exports = transformState;
