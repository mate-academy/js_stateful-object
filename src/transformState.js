'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const typeAction = action.type;

    if (typeAction === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (typeAction === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (typeAction === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete state[keyToRemove];
      }
    }
  }

  return state;
}

module.exports = transformState;
