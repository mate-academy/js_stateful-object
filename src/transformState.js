'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const variant of actions) {
    switch (true) {
      case (variant.type === 'addProperties'):
        Object.assign(state, variant.extraData);
        break;

      case (variant.type === 'removeProperties'):
        for (const key of variant.keysToRemove) {
          delete state[key];
        }
        break;

      case (variant.type === 'clear'):
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
