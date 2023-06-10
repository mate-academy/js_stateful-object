'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        addProperties(state, extraData);
        break;

      case 'removeProperties':
        removeProperties(state, keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        return;
    }
  }
}

function addProperties(obj, properties) {
  for (const property in properties) {
    obj[property] = properties[property];
  }
}

function removeProperties(obj, keys) {
  for (const key of keys) {
    delete obj[key];
  }
}

function clear(obj) {
  for (const key in obj) {
    delete obj[key];
  }
}

module.exports = transformState;
