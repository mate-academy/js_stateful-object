'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(state, action);
        break;

      case 'removeProperties':
        removeProperties(state, action);
        break;

      case 'clear':
        clear(state);
        break;

      default: return 'Wrong type';
    }
  }

  function addProperties(initialState, properties) {
    Object.assign(initialState, properties.extraData);
  }

  function removeProperties(initialState, properties) {
    for (const property of properties.keysToRemove) {
      if (initialState.hasOwnProperty(property)) {
        delete initialState[property];
      }
    }
  }

  function clear(initialState) {
    for (const feature in initialState) {
      delete initialState[feature];
    }
  }
}

module.exports = transformState;
