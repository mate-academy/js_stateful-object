'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    switch (action.type) {
      case 'addProperties':
        for (const addValues in action.extraData) {
          state[addValues] = action.extraData[addValues];
        }
        break;

      case 'removeProperties':
        for (const removeValues of action.keysToRemove) {
          if (state[removeValues]) {
            delete state[removeValues];
          }
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;
    }
  };
}

module.exports = transformState;
