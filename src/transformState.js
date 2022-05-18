'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const keyState in state) {
          delete state[keyState];
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }
  }

  return state;
}

module.exports = transformState;
