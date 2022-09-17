'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    const { type, extraData, keysToRemove } = obj;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete state[key];
      }
    }

    if (type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }
}

module.exports = transformState;
