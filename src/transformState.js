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
        for (const key in transform.properties) {
          state[key] = transform.properties[key];
        }
        break;

      case 'removeProperties':
        for (const key in transform.properties) {
          delete state[transform.properties[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
