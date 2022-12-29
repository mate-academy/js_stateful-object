'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const property in action.extraData) {
          state[property] = action.extraData[property];
        };
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete state[property];
        };
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
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
