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
        for (const property of action.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      default:
        return Error('unknown action type');
    }
  }
}

module.exports = transformState;
