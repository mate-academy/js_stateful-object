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
        for (const remove of actions[key].keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
