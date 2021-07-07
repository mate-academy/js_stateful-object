'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const value of transforms) {
    if (value.operation === 'addProperties') {
      for (const obj in value['properties']) {
        state[obj] = value['properties'][obj];
      }
    }

    if (value.operation === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (value.operation === 'removeProperties') {
      for (const prop of value.properties) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
