'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const order of actions) {
    switch (true) {
      case order.type === 'addProperties':
        Object.assign(state, order.extraData);
        break;

      case order.type === 'removeProperties':
        for (const toBeRemoved of order.keysToRemove) {
          if (toBeRemoved in state) {
            delete state[toBeRemoved];
          }
        }
        break;

      default:
        for (const eraseAll in state) {
          delete state[eraseAll];
        }
        break;
    }
  }
}

module.exports = transformState;
