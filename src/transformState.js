'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const type of actions) {
    for (const prop in type) {
      if (type[prop] === 'removeProperties') {
        for (const key of type.keysToRemove) {
          delete state[key];
        }
      }

      if (type[prop] === 'addProperties') {
        Object.assign(state, type.extraData);
      }

      if (type[prop] === 'clear') {
        for (const del in state) {
          delete state[del];
        }
      }
    }
  }

  return state;
}
module.exports = transformState;
