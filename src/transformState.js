'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        let newState = state;

        newState = Object.assign(newState, action.extraData);

        break;

      case 'clear':
        for (const member in state) {
          delete state[member];
        }
        break;

      case 'removeProperties':
        for (const removingProperty of action.keysToRemove) {
          delete state[removingProperty];
        }
    }
  }
}
module.exports = transformState;
