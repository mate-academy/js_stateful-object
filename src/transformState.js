'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(state, action.extraData);
        break;
      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;
      case 'clear':
        removeProperties(state, Object.keys(state));
        break;
      default:
        throw new Error('Error!');
    }
  }

  return state;
}

function addProperties(state, data) {
  for (const property in data) {
    state[property] = data[property];
  }
}

function removeProperties(state, properties) {
  for (const property of properties) {
    delete state[property];
  }
}

module.exports = transformState;
