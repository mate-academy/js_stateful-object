'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    switch (property.type) {
      case 'addProperties':
        Object.assign(state, property.extraData);
        break;

      case 'removeProperties':
        for (const key of property.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw Error;
    }
  }

  return state;
}

module.exports = transformState;
