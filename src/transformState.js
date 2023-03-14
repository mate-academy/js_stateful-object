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
        for (const key of act.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const st in state) {
          delete state[st];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
