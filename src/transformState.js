'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const refToState = state;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      const dataToAdd = actions[i].extraData;

      Object.assign(refToState, dataToAdd);
    }

    if (actions[i].type === 'removeProperties') {
      const keysToRemove = actions[i].keysToRemove;

      for (const key of keysToRemove) {
        delete refToState[key];
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in refToState) {
        delete refToState[key];
      }
    }
  }

  return refToState;
}

module.exports = transformState;
