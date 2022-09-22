'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const step of actions) {
    switch (step.type) {
      case 'addProperties':
        Object.assign(state, step.extraData);
        break;

      case 'removeProperties':
        const keysToDelete = step.keysToRemove;

        for (const key of keysToDelete) {
          delete state[key];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
