'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const index in actions) {
    const currentAction = actions[index];

    switch (currentAction.type) {
      case 'addProperties':
        addProperties(state, currentAction.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, currentAction.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;
    }
  }
}

function addProperties(state, data) {
  for (const key in data) {
    state[key] = data[key];
  }
}

function removeProperties(state, data) {
  for (const key in data) {
    const currentKey = data[key];

    if (state[currentKey] !== undefined) {
      delete state[currentKey];
    }
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
