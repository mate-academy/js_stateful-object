'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    switch (element.type) {
      case 'addProperties':
        Object.assign(state, element.extraData);
        break;

      case 'removeProperties':
        for (const keysRemove of element.keysToRemove) {
          delete state[keysRemove];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
