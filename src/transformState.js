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
        for (const property in transform.properties) {
          state[property] = transform.properties[property];
        }
        break;
      case 'removeProperties':
        for (const property of transform.properties) {
          delete state[property];
        }
        break;
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
