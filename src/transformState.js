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
        for (const property of transform.properties) {
          delete state[property];
        }
        break;
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
