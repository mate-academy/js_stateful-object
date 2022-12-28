'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    if (prop.type === 'addProperties') {
      for (const proper in prop.extraData) {
        state[proper] = prop.extraData[proper];
      }
    }

    if (prop.type === 'removeProperties') {
      for (const proper of prop.keysToRemove) {
        delete state[proper];
      }
    }

    if (prop.type === 'clear') {
      for (const proper in state) {
        delete state[proper];
      }
    }
  }

  return state;
}

module.exports = transformState;
