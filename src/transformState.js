'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      const copyExtra = { ...obj.extraData };

      for (const prop in copyExtra) {
        state[prop] = copyExtra[prop];
      }
    }

    if (obj.type === 'removeProperties') {
      for (const removeArr of obj.keysToRemove) {
        delete state[removeArr];
      }
    }

    if (obj.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
