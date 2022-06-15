'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const object of actions) {
    switch (object.type) {
      case `addProperties`:
        Object.assign(state, object.extraData);
        break;
      case `clear`:
        for (const key in state) {
          delete state[key];
        }
        break;
      case `removeProperties`:
        object.keysToRemove.forEach((el) => {
          if (state[el]) {
            delete state[el];
          }
        });
        break;
    }
  }
}

module.exports = transformState;
