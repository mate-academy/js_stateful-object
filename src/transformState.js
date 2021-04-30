'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const { operation, properties } of transforms) {
    switch (operation) {
      case 'addProperties':
        Object.assign(state, properties);
        break;

      case 'removeProperties':
        for (const remove of properties) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
