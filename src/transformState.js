'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    doAction(action, state);
  }

  return state;
}

function doAction(action, state) {
  switch (action.type) {
    case 'addProperties':
      addProperties(action.extraData, state);
      break;
    case 'removeProperties':
      removeProperties(action.keysToRemove, state);
      break;
    case 'clear':
      clear(state);
      break;
    default:
      throw Error('Something went wrong');
  }
}

function addProperties(extraData, state) {
  for (const property in extraData) {
    state[property] = extraData[property];
  }
}

function removeProperties(keysToRemove, state) {
  for (const property of keysToRemove) {
    delete state[property];
  }
}

function clear(state) {
  for (const property in state) {
    delete state[property];
  }
}

module.exports = transformState;
