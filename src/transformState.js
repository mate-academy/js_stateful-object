'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const variant of actions) {
    switch (variant.type) {
      case 'addProperties':
        Object.assign(state, variant.extraData);
        break;

      case 'removeProperties':
        for (const key of variant.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
