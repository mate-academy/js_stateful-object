'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action.type;

    switch (actionType) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        for (const element in state) {
          delete state[element];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
