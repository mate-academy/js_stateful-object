'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const transform of transforms) {
    switch (transform.operation) {
      case 'addProperties':
        Object.assign(state, transform.properties);
        break;
      case 'removeProperties':
        for (const key of transform.properties) {
          delete state[key];
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
