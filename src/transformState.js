'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const value of transforms) {
    switch (value.operation) {
      case 'addProperties' :
        for (const key in value.properties) {
          state[key] = value.properties[key];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties' :
        for (const key of value.properties) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
