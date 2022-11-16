'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, extraData, keysToRemove } = actions[i];

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const key in keysToRemove) {
          delete state[keysToRemove[key]];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;

      default:
        return;
    }
  }
}

module.exports = transformState;
