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
        for (const deleteItem of action.keysToRemove) {
          delete state[deleteItem];
        }
        break;

      case 'clear':
        for (const clearItem in state) {
          delete state[clearItem];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
