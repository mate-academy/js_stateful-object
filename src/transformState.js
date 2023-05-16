'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        removeProperties(action, state);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        throw new Error(`Unknown action type ${action.type}!`);
    }
  }

  return state;
}

function removeProperties(object, keysToRemove) {
  for (const key of object.keysToRemove) {
    delete keysToRemove[key];
  }
}

function clear(object) {
  for (const key in object) {
    delete object[key];
  }
}

module.exports = transformState;
