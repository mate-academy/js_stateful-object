'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (let i = 0; i < action.length; i++) {
      if (action[i] === 'addProperties') {
        for (const extra in action[i + 1]) {
          state[extra] = action[i + 1][extra];
        }
      }

      if (action[i] === 'removeProperties') {
        for (const value in state) {
          for (const remove of action[i + 1]) {
            if (remove === state[value]) {
              delete state.value;
            }
          }
        }
      }

      if (action[i] === 'clear') {
        for (const value in state) {
          delete state[value];
        }
      }
    }
  }
}

module.exports = transformState;
