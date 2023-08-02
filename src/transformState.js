'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ACTION_ADD = 'addProperties';
  const ACTION_REMOVE = 'removeProperties';
  const ACTION_CLEAR = 'clear';
  const ERROR_MSG = 'Unknown action!';

  for (const action of actions) {
    switch (action.type) {
      case ACTION_ADD:
        Object.assign(state, action.extraData);
        break;

      case ACTION_REMOVE:
        deleteProperties(state, action.keysToRemove);
        break;

      case ACTION_CLEAR:
        deleteProperties(state, Object.keys(state));
        break;

      default:
        throw new Error(ERROR_MSG);
    }
  }
}

/**
 * @param {Object} object
 * @param {String[]} properties
 */
function deleteProperties(object, properties) {
  for (const name of properties) {
    if (object.hasOwnProperty(name)) {
      delete object[name];
    }
  }
}

module.exports = transformState;
