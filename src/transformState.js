'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    switch (element.type) {
      case 'addProperties':
        addProperties(state, element.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, element.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;
    }
  }
}

function addProperties(state, extraData) {
  Object.assign(state, extraData);
}

function removeProperties(state, keysToRemove) {
  for (const key of keysToRemove) {
    delete state[key];
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
