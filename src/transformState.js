'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const objects of actions) {
    if (objects.type === 'addProperties') {
      Object.assign(state, objects.extraData);
    }

    if (objects.type === 'removeProperties') {
      for (const keysToDelete of objects.keysToRemove) {
        if (state[keysToDelete]) {
          delete state[keysToDelete];
        }
      }
    }

    if (objects.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
