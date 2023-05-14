'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'clear':
        clearObject(state);

        break;

      case 'addProperties':
        Object.assign(state, extraData);

        break;

      case 'removeProperties':
        removeProperties(keysToRemove);

        break;

      default:
        throw Error(`Wrong action: ${action.type}`);
    }
  }

  function clearObject(object) {
    for (const key in object) {
      delete object[key];
    }
  }

  function removeProperties(keysToRemove) {
    for (const keyToRemove of keysToRemove) {
      delete state[keyToRemove];
    }
  }
}

module.exports = transformState;
