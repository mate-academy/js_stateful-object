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
        for (const key of element.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const char in state) {
          delete state[char];
        }
    }
  }
}

module.exports = transformState;
