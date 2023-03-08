'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const operatorKey of transforms) {
    if (operatorKey.operation === 'addProperties') {
      Object.assign(state, operatorKey.properties);
    } else if (operatorKey.operation === 'removeProperties') {
      for (const objectArr of operatorKey.properties) {
        delete state[objectArr];
      }
    } else if (operatorKey.operation === 'clear') {
      for (const newObj in state) {
        delete state[newObj];
      }
    }
  }
}

module.exports = transformState;
