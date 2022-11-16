'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    const action = obj['type'];

    switch (action) {
      case 'addProperties':
        addProperties(state, obj.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, obj.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;

      default:

        break;
    }
  }
}

function addProperties(state, data) {
  for (const key in data) {
    state[key] = data[key];
  }
}

function removeProperties(state, toRemove) {
  for (const i of toRemove) {
    delete state[i];
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
