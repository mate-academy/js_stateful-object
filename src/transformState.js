'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        for (const character of action.keysToRemove) {
          if (state.hasOwnProperty(character)) {
            delete state[character];
          }
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
