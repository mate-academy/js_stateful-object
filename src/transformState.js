'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    switch (prop.type) {
      case 'addProperties':
        addProperties(state, prop.extraData);
        break;

      case 'clear':
        clear(state);
        break;

      case 'removeProperties':
        removeProperties(state, prop.keysToRemove);
        break;
    }
  }
}

function addProperties(state, prop) {
  for (const x in prop) {
    state[x] = prop[x];
  }
}

function clear(state) {
  for (const x in state) {
    delete state[x];
  }
}

function removeProperties(state, prop) {
  for (const x of prop) {
    delete state[x];
  }
}

module.exports = transformState;
