'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const keyActions of actions) {
    switch (keyActions.type) {
      case 'addProperties':
        Object.assign(state, keyActions.extraData);
        break;

      case 'removeProperties':
        for (const ketToRemove of keyActions.keysToRemove) {
          if (state.hasOwnProperty(ketToRemove)) {
            delete state[ketToRemove];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return null;
    }
  }

  return state;
}

module.exports = transformState;
