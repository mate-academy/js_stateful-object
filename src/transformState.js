'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const order of actions) {
    switch (order.type) {
      case 'addProperties':
        Object.assign(state, order.extraData);

        break;

      case 'removeProperties':
        for (const key of order.keysToRemove) {
          delete state[key];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;

      default:
        break;
    }
  }
}

/* blank lines added for my clarity */

module.exports = transformState;
