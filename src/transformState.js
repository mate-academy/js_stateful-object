'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      default:
        return new Error('Oops, something went wrong!');
    }
  }
}

module.exports = transformState;
