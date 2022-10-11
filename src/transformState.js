'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const temp of action.keysToRemove) {
          if (state.hasOwnProperty(temp)) {
            delete state[temp];
          }
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        for (const prop in state) {
          if (state.hasOwnProperty(prop)) {
            delete state[prop];
          }
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
