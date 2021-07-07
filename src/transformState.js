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

      case 'removeProperties':

        for (const prop of key.properties) {
          delete state[prop];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
    }
  }
}

module.exports = transformState;
