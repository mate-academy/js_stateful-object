'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const trans of transforms) {
    if (trans.operation === 'addProperties') {
      for (const proper in trans.properties) {
        state[proper] = trans.properties[proper];
      }
    } else if (trans.operation === 'removeProperties') {
      for (const proper of trans.properties) {
        if (state[proper]) {
          delete state[proper];
        }
      }
    } else if (trans.operation === 'clear') {
      for (const proper in state) {
        delete state[proper];
      }
    }
  }

  return state;
}

module.exports = transformState;
