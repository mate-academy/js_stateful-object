'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const key in obj) {
      if (obj[key] === 'addProperties') {
        Object.assign(state, { ...obj.extraData });
      }

      if (obj[key] === 'removeProperties') {
        for (const i of obj.keysToRemove) {
          delete state[i];
        }
      }

      if (obj[key] === 'clear') {
        for (const i in state) {
          delete state[i];
        }
      }
    }
  }
}

module.exports = transformState;
