'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const currentState = state;

  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'clear':
        for (const key in currentState) {
          delete currentState[key];
        };

        break;

      case 'addProperties':
        Object.assign(currentState, extraData);

        break;

      case 'removeProperties':
        for (const keyToRemove of keysToRemove) {
          delete currentState[keyToRemove];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
