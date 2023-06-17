'use strict';

// /**
//  * @param {Object} state
//  * @param {Object[]} actions
//  */

function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;
    const typeAdd = 'addProperties';
    const typeRemove = 'removeProperties';
    const typeClear = 'clear';

    switch (type) {
      case typeAdd:
        addProperties(state, extraData);
        break;

      case typeRemove:
        removeValueByKey(state, keysToRemove);
        break;

      case typeClear:
        clearObj(state);
        break;

      default:
        break;
    }
  }

  return state;
};

function addProperties(obj, data) {
  Object.assign(obj, data);
};

function removeValueByKey(obj, keys) {
  keys.forEach(key => delete obj[key]);
};

function clearObj(obj) {
  for (const key in obj) {
    delete obj[key];
  }
};

module.exports = transformState;
