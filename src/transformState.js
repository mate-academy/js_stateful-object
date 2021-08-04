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
      for (const keys in properties.keysToRemove) {
        delete state[properties.keysToRemove[keys]];
      }
    }

    if (properties.type === 'clear') {
      for (const properties2 in state) {
        delete state[properties2];
      };
    }
  }
}

module.exports = transformState;
