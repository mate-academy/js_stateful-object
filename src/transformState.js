'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case action.type === 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case action.type === 'clear':
        for (const total in state) {
          delete state[total];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
