'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const x of actions) {
    if (x.type === 'addProperties') {
      Object.assign(state, x.extraData);
    }

    if (x.type === 'removeProperties') {
      for (const i of x.keysToRemove) {
        if (state.hasOwnProperty(i)) {
          delete state[i];
        }
      }
    }

    if (x.type === `clear`) {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
