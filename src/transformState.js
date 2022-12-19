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

    if (obj.type === 'clear') {
      Object.keys(state).forEach(v => delete state[v]);
    }

    if (obj.type === 'removeProperties') {
      for (const prop of obj.keysToRemove) {
        if (state[prop]) {
          delete state[prop];
        }
      }
    }
  }
}

module.exports = transformState;
