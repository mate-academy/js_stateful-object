'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(object, array) {
  for (const i of array) {
    for (const k in i) {
      if (i[k] === 'addProperties') {
        Object.assign(object, i.extraData);
      } else if (i[k] === 'clear') {
        for (const prop of Object.getOwnPropertyNames(object)) {
          delete object[prop];
        }
      } else if (i[k] === 'removeProperties') {
        for (let m = 0; m < i.keysToRemove.length; m++) {
          delete object[i['keysToRemove'][m]];
        }
      }
    }
  }

  return object;
}

module.exports = transformState;
