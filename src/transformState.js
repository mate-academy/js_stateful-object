'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const object of actions) {
    if (object.type === `addProperties`) {
      Object.assign(state, object.extraData);
    }

    if (object.type === `clear`) {
      for (const key in state) {
        delete state[key];
      }
    }

    if (object.type === `removeProperties`) {
      object.keysToRemove.forEach((el) => {
        if (state[el]) {
          delete state[el];
        }
      });
    }
  }
}

module.exports = transformState;
