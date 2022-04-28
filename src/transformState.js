'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        for (const key1 of obj.keysToRemove) {
          delete state[key1];
        }
        break;

      case 'clear':
        for (const key3 in state) {
          delete state[key3];
        }
    }
  }
}

module.exports = transformState;
