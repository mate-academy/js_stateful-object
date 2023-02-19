'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    if (elem.type === 'addProperties') {
      Object.assign(state, elem.extraData);
    }

    if (elem.type === 'removeProperties') {
      for (const keyToRemove of elem.keysToRemove) {
        delete state[keyToRemove];
      }
    }

    if (elem.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
