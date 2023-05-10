'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const newState = state;

  const addProperties = (object) => {
    for (const key of Object.keys(object)) {
      const value = object[key];

      newState[key] = value;
    }
  };

  const deleteCertainProperties = (array) => {
    for (const key of array) {
      delete newState[key];
    }
  };

  const deleteAllProperties = (object) => {
    for (const key of Object.keys(object)) {
      delete newState[key];
    }
  };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(action.extraData);
        break;

      case 'removeProperties':
        deleteCertainProperties(action.keysToRemove);
        break;

      case 'clear':
        deleteAllProperties(newState);
        break;

      default:
        throw new Error('Wrong action type!');
    }
  }

  return newState;
}

module.exports = transformState;
