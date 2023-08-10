'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const remove = 'removeProperties';
  const clear = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case add:
        Object.assign(state, action.extraData);
        break;

      case remove:
        for (const keyToRemove of action.keysToRemove) {
          if (state.hasOwnProperty(keyToRemove)) {
            delete state[keyToRemove];
          }
        }
        break;

      case clear:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }

  return state;
}
module.exports = transformState;
