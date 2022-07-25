'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, transforms) {
  for (const transform of transforms) {
    if (transform.operation === 'addProperties') {
      Object.assign(state, transform.properties);
    }

    if (transform.operation === 'removeProperties') {
      for (const property of transform.properties) {
        delete state[property];
      }
    }

    if (transform.operation === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }

module.exports = transformState;
