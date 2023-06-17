'use strict';

// /**
//  * @param {Object} state
//  * @param {Object[]} actions
//  */

function transformState(state, actions) {
  for (const action of actions) {
    const dataToAdd = action.extraData;
    const keysToRemove = action.keysToRemove;
    const allKeys = Object.keys(state);
    const typeAdd = 'addProperties';
    const typeRemove = 'removeProperties';
    const typeClear = 'clear';

    switch (action.type) {
      case typeAdd:
        addProperties(state, dataToAdd);
        break;

      case typeRemove:
        removeValueByKey(state, keysToRemove);
        break;

      case typeClear:
        removeValueByKey(state, allKeys);
        break;

      default:
        break;
    }
  }

  return state;
}

function addProperties(obj, data) {
  Object.assign(obj, data);
}

function removeValueByKey(obj, keys) {
  keys.forEach(key => delete obj[key]);
}

module.exports = transformState;
