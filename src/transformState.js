'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, transforms) {
  for (const transform of transforms) {
    switch (transform.operation) {
      case 'addProperties' : {
        Object.assign(state, transform.properties);

        break;
      }

      case 'removeProperties' : {
        for (const property of transform.properties) {
          delete state[property];
        }

        break;
      }

      case 'clear' : {
        for (const property in state) {
          delete state[property];
        }

        break;
      }

      default: {
        break;
      }
    }
  }
module.exports = transformState;
