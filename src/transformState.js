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
        removeProperties(action.keysToRemove, state);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        throw new Error('Error');
    }
  }

  return state;
}

function removeProperties(keysToRemove, state) {
  for (const key of keysToRemove) {
    delete state[key];
  }
}

function clear(state) {
  for (const property in state) {
    delete state[property];
  }
}

module.exports = transformState;
