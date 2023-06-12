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
        removeProperties(state, Object.keys(state));
        break;

      default:
        throw new Error(`The action type ${action.type} is invalid`);
    }
  }
}

function addProperties(object, extraData) {
  Object.assign(object, extraData);
}

function removeProperties(object, keys) {
  for (const key of keys) {
    delete object[key];
  }
}

module.exports = transformState;
