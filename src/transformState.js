'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(e => delete state[e]);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default: return 'Error';
    }
  }
}

module.exports = transformState;
