'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    } else if (i.type === 'removeProperties') {
      for (const j of i.keysToRemove) {
        if (j in state) {
          delete state[j];
        }
      }
    } else if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
