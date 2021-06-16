'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const obj of transforms) {
    if (obj.operation === 'addProperties') {
      for (const key in obj.properties) {
        state[key] = obj.properties[key];
      }
    }

    if (obj.operation === 'removeProperties') {
      for (const key of obj.properties) {
        delete state[key];
      }
    }

    if (obj.operation === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
