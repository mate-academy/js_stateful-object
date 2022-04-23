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
        for (const removeItem of action.keysToRemove) {
          delete state[removeItem];
        }
        break;

      case 'clear':
        for (const remove in state) {
          delete state[remove];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
