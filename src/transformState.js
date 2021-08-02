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
        const { keysToRemove } = action;

        for (const key of keysToRemove) {
          delete state[key];
        }

        break;

      case 'clear':
        for (const element in state) {
          delete state[element];
        }

        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
