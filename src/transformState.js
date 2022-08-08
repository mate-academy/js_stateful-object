'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const objOfActions of actions) {
    if (objOfActions['type'] === 'addProperties') {
      Object.assign(state, objOfActions['extraData']);
    }

    if (objOfActions['type'] === 'removeProperties') {
      for (const arr of objOfActions['keysToRemove']) {
        delete state[arr];
      }
    }

    if (objOfActions['type'] === 'clear') {
      for (const propertie in state) {
        delete state[propertie];
      }
    }
  }
}

module.exports = transformState;
