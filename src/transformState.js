'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        for (const keys of act.keysToRemove) {
          delete state[keys];
        }
        break;

      default:
        for (const name in state) {
          delete state[name];
        }
        break;
    }
  }
}

module.exports = transformState;
