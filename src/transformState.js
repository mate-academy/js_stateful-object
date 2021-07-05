'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const items of transforms) {
    switch (items.operation) {
      case 'addProperties':
        for (const key in items.properties) {
          state[key] = items.properties[key];
        }
        break;

      case 'removeProperties':
        for (const key of items.properties) {
          delete state[key];
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
