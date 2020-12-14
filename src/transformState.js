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
        Object.assign(state, properties);

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

      default:
        continue;
    }
  }

  return state;
}

module.exports = transformState;
