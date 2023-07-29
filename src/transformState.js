'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const toDelete of obj.keysToRemove) {
        delete state[toDelete];
      }
    }

    if (obj.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
