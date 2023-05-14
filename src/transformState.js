'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties': {
        Object.assign(state, extraData);
        break;
      }

      case 'removeProperties': {
        removeProperties(state, keysToRemove);
        break;
      }

      case 'clear': {
        clearProperties(state);
        break;
      }

      default: {
        throw new Error(`Unknown action type: ${type}`);
      }
    }
  }

  function removeProperties(obj, keysToRemove) {
    for (const key of keysToRemove) {
      if (obj.hasOwnProperty(key)) {
        delete obj[key];
      }
    }
  }

  function clearProperties(obj) {
    for (const key of Object.keys(obj)) {
      delete obj[key];
    }
  }
}

module.exports = transformState;
