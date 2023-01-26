'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type } = actions[i];

    switch (type) {
      case 'addProperties':
        const { extraData } = actions[i];

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;

      case 'removeProperties':
        const { keysToRemove } = actions[i];

        for (let j = 0; j < keysToRemove.length; j++) {
          delete state[keysToRemove[j]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
