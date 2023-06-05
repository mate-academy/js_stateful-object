'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = { ...state };

  for (const action of actions) {
    const { type } = action;

    if (type === 'addProperties') {
      const { extraData } = action;

      Object.assign(newState, extraData);
    }

    if (type === 'removeProperties') {
      const { keysToRemove } = action;

      for (const key of keysToRemove) {
        delete newState[key];
      }
    }

    if (type === 'clear') {
      newState = {};
    }
  }

  return newState;
}

module.exports = transformState;
