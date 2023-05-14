'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const removeKey = function(actionObject, object) {
  const { keysToRemove } = actionObject;

  for (const keyToRemove of keysToRemove) {
    delete object[keyToRemove];
  }
};
const clearProperties = function(actionObject, object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      delete object[key];
    }
  }
};

function transformState(state, actions) {
  const stateCopy = state;

  for (const action of actions) {
    const { type, extraData } = action;

    switch (type) {
      case 'clear':
        clearProperties(action, stateCopy);
        break;
      case 'addProperties':
        Object.assign(stateCopy, extraData);
        break;
      case 'removeProperties':
        removeKey(action, stateCopy);
        break;
    }
  }

  return stateCopy;
}

module.exports = transformState;
