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
        for (const key of properties.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return {};
    }
  }
}

module.exports = transformState;
