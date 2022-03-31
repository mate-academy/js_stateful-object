'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const a of actions) {
    switch (a.type) {
      case 'addProperties':
        Object.assign(state, a.extraData);
        break;

      case 'removeProperties':
        for (const m of a.keysToRemove) {
          delete state[m];
        };
        break;

      default:
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }
}

module.exports = transformState;
