'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const item of transforms) {
    switch (item.operation) {
      case 'addProperties' :
        for (const key in item.properties) {
          state[key] = item.properties[key];
        }
        break;

      case 'removeProperties' :
        for (const key of item.properties) {
          delete state[key];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
