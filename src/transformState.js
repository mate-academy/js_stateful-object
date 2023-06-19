'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;

      case action.type === 'removeProperties':
        const actionKeysToRemove = action.keysToRemove;

        for (let i = 0; i < actionKeysToRemove.length; i++) {
          delete state[action.keysToRemove[i]];
        }
        break;

      case action.type === 'clear':
        for (const keyState in state) {
          delete state[keyState];
        }
        break;

      default:
        return;
    }
  }
}

module.exports = transformState;
