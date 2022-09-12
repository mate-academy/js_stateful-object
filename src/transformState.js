'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const obj = state;

  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(obj, key.extraData);
    }

    if (key.type === 'removeProperties') {
      for (const remove of key.keysToRemove) {
        delete obj[remove];
      }
    }

    if (key.type === 'clear') {
      for (const properties in state) {
        delete obj[properties];
      }
    }
  }

  return obj;
}
module.exports = transformState;
