'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const properties in action.extraData) {
          state[properties] = action.extraData[properties];
        };
        break;

      case 'removeProperties':
        for (const properties of action.keysToRemove) {
          delete state[properties];
        };
        break;

      case 'clear':
        for (const properties in state) {
          delete state[properties];
        }
    }
  }
}
module.exports = transformState;
