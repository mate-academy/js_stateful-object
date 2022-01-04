'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      deleteAllProperties(state);
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      deleteProperties(state, action.keysToRemove);
    }
  }
}

function deleteAllProperties(state) {
  for (const key in state) {
    delete state[key];
  }
}

function deleteProperties(state, keysToRemove) {
  for (const key of keysToRemove) {
    delete state[key];
  }
}

module.exports = transformState;
