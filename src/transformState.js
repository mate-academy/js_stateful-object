'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const j of actions) {
    switch (j.type) {
      case 'addProperties':
        Object.assign(state, j.extraData);
        break;

      case 'removeProperties':
        for (const k of j.keysToRemove) {
          if (state.hasOwnProperty(k)) {
            delete state[k];
          }
        }
        break;

      case 'clear':
        for (const w in state) {
          delete state[w];
        }
        break;
    }
  }
}

module.exports = transformState;
