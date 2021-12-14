'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    const { type, extraData, keysToRemove } = element;

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
        for (const item in state) {
          delete state[item];
        }
        break;
    }
  }
}

module.exports = transformState;
