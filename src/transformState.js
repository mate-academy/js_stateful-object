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
        for (const toDelete of action.keysToRemove) {
          delete state[toDelete];
        };
        break;

      case 'clear':
        for (const entries in state) {
          delete state[entries];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
