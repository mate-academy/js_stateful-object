'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    if (property.type === 'addProperties') {
      Object.assign(state, property.extraData);
    }

    if (property.type === 'removeProperties') {
      for (const item of property.keysToRemove) {
        delete state[item];
      }
    }

    if (property.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
