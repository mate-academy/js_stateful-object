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

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      case 'removeProperties':
        for (const index of action.keysToRemove) {
          delete state[index];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
