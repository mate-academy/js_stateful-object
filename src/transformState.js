'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(state, i.extraData);
        break;
      case 'removeProperties':
        for (const k of i.keysToRemove) {
          delete state[k];
        }
        break;
      default:
        for (const j in state) {
          delete state[j];
        }
        break;
    }
  }
}

module.exports = transformState;
