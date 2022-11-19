'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, [...actions]) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const states of action.keysToRemove) {
          delete state[states];
        }
        break;

      case 'clear':
        for (const states in state) {
          delete state[states];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
