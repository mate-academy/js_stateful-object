'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;
      case 'removeProperties':
        for (const el of actions[key].keysToRemove) {
          delete state[el];
        }
        break;
      case 'clear':
        for (const el in state) {
          delete state[el];
        }
        break;
      default:
        break;
    }
  }
}
module.exports = transformState;
