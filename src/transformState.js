'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const type of actions) {
    if (type['type'] === 'addProperties') {
      for (const property in type['extraData']) {
        state[property] = type['extraData'][property];
      }
    }

    if (type['type'] === 'removeProperties') {
      for (const property of type['keysToRemove']) {
        delete state[property];
      }
    }

    if (type['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
