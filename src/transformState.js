'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const key in obj) {
      if (obj[key] === 'addProperties') {
        Object.assign(state, obj.extraData);
      }

      if (obj[key] === 'removeProperties') {
        for (const props of obj.keysToRemove) {
          delete state[props];
        }
      }

      if (obj[key] === 'clear') {
        for (const keys in state) {
          delete state[keys];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
