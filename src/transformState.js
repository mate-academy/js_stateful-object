'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, keysToRemove, extraData } of actions) {
    switch (type) {
      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
