'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let obj = state;

  for (const key of actions) {
    if (key.type === 'addProperties') {
      obj = Object.assign(obj, key.extraData);
    }

    if (key.type === 'removeProperties') {
      for (const arr of key.keysToRemove) {
        delete obj[arr];
      }
    }

    if (key.type === 'clear') {
      for (const objKey in state) {
        delete obj[objKey];
      }
    }
  }

  return obj;
}

module.exports = transformState;
