'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    } else if (obj.type === 'removeProperties') {
      const removeArray = obj.keysToRemove;

      for (const key of removeArray) {
        if (key in state) {
          delete state[key];
        }
      }
    } else if (obj.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
