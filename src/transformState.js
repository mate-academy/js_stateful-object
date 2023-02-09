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

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        for (const key of action.keysToRemove) {
          if (state[key]) {
            delete state[key];
          }
        }
    }
  }
}

module.exports = transformState;
