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
        for (const extra of action.keysToRemove) {
          delete state[extra];
        };
        break;

      case 'clear':
        for (const item in state) {
          delete state[item];
        }
        break;

      default:
        throw new Error('unknown type');
    }
  }
}

module.exports = transformState;
