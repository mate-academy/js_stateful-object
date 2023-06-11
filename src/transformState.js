'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'addProperties':
        addProperties(state, extraData);
        break;

      case 'removeProperties':
        removeProperties(state, keysToRemove);
        break;

      case 'clear':
        removeProperties(state, Object.keys(state));
        break;

      default:
        throw new Error(`The action of type ${type} is invalid`);
    }
  }
}

function addProperties(obj, properties) {
  Object.assign(obj, properties);
}

function removeProperties(obj, keys) {
  for (const key of keys) {
    delete obj[key];
  }
}

module.exports = transformState;
