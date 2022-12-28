'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const proper in action.extraData) {
          state[proper] = action.extraData[proper];
        };
        break;

      case 'removeProperties':
        for (const proper of action.keysToRemove) {
          delete state[proper];
        };
        break;

      case 'clear':
        for (const proper in state) {
          delete state[proper];
        };
        break;

      default:
        // eslint-disable-next-line no-console
        console.log('Check input value');
    }
  }

  return state;
}

module.exports = transformState;
