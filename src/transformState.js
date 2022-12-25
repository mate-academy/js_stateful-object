'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let obj = state;

  for (const key of actions) {
    const { type, extraData, keysToRemove } = key;

    switch (type) {
      case 'addProperties':
        obj = Object.assign(obj, extraData);
        break;

      case 'removeProperties':
        for (const arr of keysToRemove) {
          delete obj[arr];
        }
        break;

      case 'clear':
        for (const objKey in obj) {
          delete obj[objKey];
        }
        break;
    }
  }

  return obj;
}

module.exports = transformState;
