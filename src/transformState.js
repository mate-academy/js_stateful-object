'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        clearProperties(state);
        break;
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        removeKey(keysToRemove, state);
        break;
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  }
}

const removeKey = (keysToRemove, data) => {
  for (const keyToRemove of keysToRemove) {
    delete data[keyToRemove];
  }
};
const clearProperties = (data) => {
  for (const key in data) {
    delete data[key];
  }
};

module.exports = transformState;
