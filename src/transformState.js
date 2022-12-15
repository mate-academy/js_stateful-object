'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const key in object) {
      if (object[key] === 'addProperties') {
        Object.assign(state, object.extraData);
      } else if (object[key] === 'removeProperties') {
        for (const value of object.keysToRemove) {
          delete state[value];
        }
      } else if (object[key] === 'clear') {
        for (const i in state) {
          delete state[i];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
