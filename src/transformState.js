'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, ...rest } = action;

    switch (type) {
      case 'clear':
        clear(state);
        break;
      case 'removeProperties':
        removeProperties(state, rest);
        break;
      case 'addProperties':
        addProperties(state, rest);
        break;
      default:
        break;
    }
  }

  return state;
}

function clear(obj) {
  for (const key of Object.keys(obj)) {
    delete obj[key];
  }
};

function addProperties(obj, addedProperties) {
  Object.assign(obj, addedProperties.extraData);
};

function removeProperties(obj, { keysToRemove }) {
  for (let i = 0; i < keysToRemove.length; i++) {
    delete obj[keysToRemove[i]];
  }
};

module.exports = transformState;
