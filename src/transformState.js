'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;
      case 'addProperties':
        for (const data of Object.keys(action.extraData)) {
          state[data] = action.extraData[data];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
