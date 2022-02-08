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
        clear(state);
    }
  }
}

function addProperties(state, props) {
  Object.assign(state, props);
}

function removeProperties(state, props) {
  for (const key of props) {
    if (state[key]) {
      delete state[key];
    }
  }
}

function clear(state) {
  Object.keys(state).forEach((key) => {
    delete state[key];
  });
}

module.exports = transformState;
