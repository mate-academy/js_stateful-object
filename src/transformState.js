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
        for (const prop in state) {
          delete state[prop];
        }
        break;
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
