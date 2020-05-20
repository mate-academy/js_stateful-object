'use strict';

/**
 * @param {Object} state
 * @param {Object[]} transforms
 */
function transformState(state, transforms) {
  // write code here

  const OPERATION = {
    add: 'addProperties',
    remove: 'removeProperties',
    clear: 'clear',
  };

  for (const transform of transforms) {
    if (transform.operation === OPERATION.add) {
      for (const addKey in transform.properties) {
        state[addKey] = transform.properties[addKey];
        continue;
      }
    }

    if (transform.operation === OPERATION.remove) {
      for (const removeKey in transform.properties) {
        delete state[transform.properties[removeKey]];
        continue;
      }
    }

    if (transform.operation === OPERATION.clear) {
      for (const removeKey in state) {
        delete state[removeKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
