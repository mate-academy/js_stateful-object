'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addOperation = 'addProperties';
  const clearOperation = 'clear';
  const removeOperation = 'removeProperties';

  for (const action of actions) {
    switch (action.type) {
      case addOperation:
        Object.assign(state, action.extraData);
        break;
      case clearOperation:
        for (const key in state) {
          delete state[key];
        }
        break;
      case removeOperation:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
