'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties'):
        const keys = action.extraData;

        for (const key in keys) {
          state[key] = keys[key];
        }
        continue;

      case (action.type === 'removeProperties'):
        for (const key of action.keysToRemove) {
          if (state[key]) {
            delete state[key];
          }
        }
        continue;

      case (action.type === 'clear'):
        for (const key in state) {
          delete state[key];
        }
        continue;
    }
  }

  return state;
}

module.exports = transformState;
