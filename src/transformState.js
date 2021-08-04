'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const properties of actions) {
    switch (properties.type) {
      case 'addProperties':
        Object.assign(state, properties.extraData);
        break;

      case 'removeProperties':
        for (const keys in properties.keysToRemove) {
          delete state[properties.keysToRemove[keys]];
        }
        break;

      case 'clear':
        for (const properties2 in state) {
          delete state[properties2];
        };
        break;
    }
  }
}

module.exports = transformState;
