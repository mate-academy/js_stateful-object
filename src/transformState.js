'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const key of transforms) {
    switch (key.operation) {
      case 'addProperties':
        Object.assign(state, key.properties);
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;

      case 'removeProperties':
        for (const remove of key.properties) {
          delete state[remove];
        }
        break;
    }
  }
}

module.exports = transformState;
