'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const newObj = state;

  for (const a of actions) {
    if (a.type === 'addProperties') {
      Object.assign(newObj, a.extraData);
    }

    if (a.type === 'removeProperties') {
      for (const i of a.keysToRemove) {
        delete newObj[i];
      }
    }

    if (a.type === 'clear') {
      for (const k in newObj) {
        delete newObj[k];
      }
    }
  }

  return newObj;
}

module.exports = transformState;
