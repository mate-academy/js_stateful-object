'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        clearObject(state);
        break;

      case 'removeProperties':
        removeProperties(action.keysToRemove);
        break;

      case 'addProperties':
        addProperties(action.extraData);
        break;
    }
  }

  return state;

  function clearObject(object) {
    for (const key in object) {
      delete object[key];
    }
  }

  function removeProperties(toRemove) {
    for (const key of toRemove) {
      delete state[key];
    }
  }

  function addProperties(properties) {
    Object.assign(state, properties);
  }
}

module.exports = transformState;
