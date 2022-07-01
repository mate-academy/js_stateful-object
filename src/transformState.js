'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(function(action) {
    switch (action.type) {
      case 'addProperties':
        addPropertiesMutation(state, action.extraData);
        break;
      case 'removeProperties':
        removePropertiesMutation(state, action.keysToRemove);
        break;
      case 'clear':
        clearAllMutation(state);
        break;

      default:
    }
  });
}

function addPropertiesMutation(state, data) {
  Object.assign(state, data);
}

function removePropertiesMutation(state, keys) {
  keys.forEach(function(key) {
    delete state[key];
  });
}

function clearAllMutation(state) {
  removePropertiesMutation(state, Object.keys(state));
}

module.exports = transformState;
