'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        Object.assign(state, action.extraData);
        break;
      }

      case 'removeProperties': {
        removeKeys(state, action.keysToRemove);
        break;
      }

      case 'clear': {
        clearObject(state);
        break;
      }
      default:
        break;
    }
  }
}

/**
 * @param {Object} clrObj
 */
function clearObject(clrObj) {
  for (const key in clrObj) {
    delete clrObj[key];
  }
}

/**
 * @param {Object} clrObj
 * @param {Array} keys
 */
function removeKeys(clrObj, keys) {
  for (const key of keys) {
    delete clrObj[key];
  }
}

module.exports = transformState;
