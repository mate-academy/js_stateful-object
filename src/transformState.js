'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        for (const extra in action.extraData) {
          state[extra] = action.extraData[extra];
        }
        break;

      case action.type === 'removeProperties':
        for (const keys of action.keysToRemove) {
          delete state[keys];
        }
        break;

      case action.type === 'clear':
        for (const states in state) {
          delete state[states];
        }
        break;
    }
  }
}

module.exports = transformState;
