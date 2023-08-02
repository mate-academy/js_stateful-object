'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const item of transforms) {
    if (item.operation === 'addProperties') {
      Object.assign(state, item.properties);
    }

    if (item.operation === 'removeProperties') {
      for (const removeItem of item.properties) {
        if (removeItem in state) {
          delete state[removeItem];
        }
      }
    }

    if (item.operation === 'clear') {
      for (const clearKey in state) {
        delete state[clearKey];
      }
    }
  }
}

module.exports = transformState;
