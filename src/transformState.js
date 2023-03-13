'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, keysToRemove, extraData } = actions[i];

    if (type === 'removeProperties') {
      for (let j = 0; j < keysToRemove.length; j++) {
        delete state[keysToRemove[j]];
      }
    }

    if (type === 'addProperties') {
      const keysProp = Object.keys(extraData);

      for (let j = 0; j < keysProp.length; j++) {
        state[keysProp[j]] = extraData[keysProp[j]];
      }
    }

    if (type === 'clear') {
      const keysProp = Object.keys(state);

      for (let j = 0; j < keysProp.length; j++) {
        delete state[keysProp[j]];
      }
    }
  }

  return state;
}

module.exports = transformState;
