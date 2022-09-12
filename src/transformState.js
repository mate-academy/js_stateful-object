'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      addProperties(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      removeProperties(state, action.keysToRemove);
    } else if (action.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

function addProperties(state, action) {
  for (const prop in action) {
    state[prop] = action[prop];
  }
}

function removeProperties(state, action) {
  for (const prop of action) {
    delete state[prop];
  }
}

module.exports = transformState;
