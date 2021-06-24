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
        for (const removeKeys of action.keysToRemove) {
          delete state[removeKeys];
        }
        break;

      case 'clear':
        for (const stateProperty in state) {
          delete state[stateProperty];
        }
    }
  }

  return state;
}

module.exports = transformState;
