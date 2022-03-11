'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(object, array) {
  for (const i of array) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(object, i.extraData);
        break;

      case 'clear':
        Object.getOwnPropertyNames(object).forEach(function(prop) {
          delete object[prop];
        });
        break;

      case 'removeProperties':
        for (let m = 0; m < i.keysToRemove.length; m++) {
          delete object[i['keysToRemove'][m]];
        }
        break;

      default:
        break;
    }
  }

  return object;
}

module.exports = transformState;
