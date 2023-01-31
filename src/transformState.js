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
      for (const name of object.keysToRemove) {
        delete state[name];
      }
    }

    if (object.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
