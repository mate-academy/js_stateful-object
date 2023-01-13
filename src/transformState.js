'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type, extraData, keysToRemove } = actions[i];

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (let j = 0; j < keysToRemove.length; j++) {
          if (state.hasOwnProperty(keysToRemove[j])) {
            delete state[keysToRemove[j]];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
