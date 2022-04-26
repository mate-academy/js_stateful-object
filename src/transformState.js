'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    const type = object.type;
    const propertiesToRemove = object.keysToRemove;

    if (type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }

    if (type === 'addProperties') {
      Object.assign(state, object.extraData);
    }

    if (type === 'removeProperties') {
      for (const key of propertiesToRemove) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
