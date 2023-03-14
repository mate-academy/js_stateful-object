'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, keysToRemove, extraData } = actions[i];

    switch (type) {
      case 'removeProperties':
        for (let j = 0; j < keysToRemove.length; j++) {
          delete state[keysToRemove[j]];
        };
        break;
      case 'addProperties':
        for (const key in extraData) {
          state[key] = extraData[key];
        };
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
