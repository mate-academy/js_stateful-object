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
    }
  }
}

function addProperties(object, extraData) {
  for (const key in extraData) {
    Object.assign(object, { [key]: extraData[key] });
  }
}

function removeProperties(object, array) {
  for (const key of array) {
    if (key in object) {
      delete object[key];
    }
  }
}

function clear(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
