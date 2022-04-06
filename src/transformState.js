'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, ...actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const char of actions[i]) {
      if (char.type === 'addProperties') {
        for (const key in char.extraData) {
          state[key] = char.extraData[key];
        }
      } else if (char.type === 'removeProperties') {
        for (const key of char.keysToRemove) {
          if (!state[key]) {
            continue;
          }
          delete state[key];
        }
      } else if (char.type === 'clear' && Object.keys(state).length !== 0) {
        for (const keyOfState in state) {
          delete state[`${keyOfState}`];
        }
      }
    }
  }
}

module.exports = transformState;
