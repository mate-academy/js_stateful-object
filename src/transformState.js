'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    if (prop.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (prop.type === 'addProperties') {
      for (const add in prop.extraData) {
        state[add] = prop.extraData[add];
      }
    }

    if (prop.type === 'removeProperties') {
      for (const rem of prop.keysToRemove) {
        for (const key in state) {
          if (key === rem) {
            delete state[key];
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
