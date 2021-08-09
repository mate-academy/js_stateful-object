'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const transform of transforms) {
    if (transform.operation === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (transform.operation === 'addProperties') {
      Object.assign(state, transform.properties);
    }

    if (transform.operation === 'removeProperties') {
      for (const property of transform.properties) {
        delete state[property];
      }
    }
  }

  return state;
}

module.exports = transformState;
