'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions */
function transformState(state, actions) {
  const removeKeyFromStateObj = (key) => {
    delete state[key];
  };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(removeKeyFromStateObj);
        break;

      case 'clear':
        Object.keys(state).forEach(removeKeyFromStateObj);
        break;

      default:
        throw new Error(
          'unknown "type" of "action" from "@param {Object[]} actions"');
    }
  }
}

module.exports = transformState;
