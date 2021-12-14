'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const properties of actions) {
    if (properties.type === 'addProperties') {
      Object.assign(state, properties.extraData);
    }

    if (properties.type === 'removeProperties') {
      for (const i of properties.keysToRemove) {
        delete state[i];
      }
    }

    if (properties.type === 'clear') {
      for (const i in state) {
        delete state[i];
      }
    }
  }
}

module.exports = transformState;
