'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action.type;

    switch (actionType) {
      case 'addProperties':
        addProperties(state, action.extraData);
        break;
      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;
      case 'clear':
        clear(state);
        break;
    }
  }
}

function addProperties(obj, extraData) {
  for (const key in extraData) {
    obj[key] = extraData[key];
  }
}

function removeProperties(obj, arr) {
  for (const key of arr) {
    if (key in obj) {
      delete obj[key];
    }
  }
}

function clear(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

module.exports = transformState;
