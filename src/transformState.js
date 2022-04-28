'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        Object.assign(state, object.extraData);
        break;

      case 'removeProperties':
        for (const element of object.keysToRemove) {
          delete state[element];
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
