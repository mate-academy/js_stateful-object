'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const transform of transforms) {
    const { properties, operation } = transform;

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
}

module.exports = transformState;
