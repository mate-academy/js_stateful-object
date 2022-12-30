'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    }

    if (actions[key].type === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }

    if (actions[key].type === 'removeProperties') {
      for (const remProp in actions[key].keysToRemove) {
        delete state[actions[key].keysToRemove[remProp]];
      }
    }
  }
}

module.exports = transformState;
