'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const remove = 'removeProperties';

  for (const action of actions) {
    switch (action.type) {
      case add:
        for (const param in action.extraData) {
          state[param] = action.extraData[param];
        }
        break;

      case remove:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      default:
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }
}

module.exports = transformState;
