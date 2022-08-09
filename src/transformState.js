'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    if (object.type === 'addProperties') {
      Object.assign(state, object.extraData);
    }

    if (object.type === 'removeProperties') {
      object.keysToRemove.forEach(el => {
        if (state[el]) {
          delete state[el];
        }
      });
    }

    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
