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
        for (const propDelete of transform.properties) {
          if (state.hasOwnProperty(propDelete)) {
            delete state[propDelete];
          }
        }
        break;

      case 'clear':
        for (const stateClear in state) {
          delete state[stateClear];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
