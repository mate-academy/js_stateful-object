'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        keysToRemove.forEach((key) => delete state[key]);
        break;
    }
  }
}

module.exports = transformState;
