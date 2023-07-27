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
        for (const keys of action.keysToRemove) {
          delete state[keys];
        };
        break;

      default:
        Object.keys(state).forEach(n => delete state[n]);
        break;
    }
  }
}

module.exports = transformState;
