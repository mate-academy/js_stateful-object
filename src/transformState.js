'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const actionProperties of actions) {
    const { type, extraData, keysToRemove } = actionProperties;

    if (type === 'addProperties') {
      Object.assign(newState, extraData);
    }

    if (type === 'removeProperties') {
      for (const key of keysToRemove) {
        delete newState[key];
      }
    }

    if (type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }
    }
  }

  return newState;
}

module.exports = transformState;
