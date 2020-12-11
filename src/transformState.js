'use strict';

/**
 * @param {Object} state
 * @param {Object[]} transforms
 */
function transformState(state, transforms) {
  for (const transform of transforms) {
    const { operation, properties } = transform;

    switch (operation) {
      case 'addProperties':
        for (const key in properties) {
          state[key] = properties[key];
        }

        break;

      case 'removeProperties':
        for (const property of properties) {
          delete state[property];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
