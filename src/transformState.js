'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const item of action.keysToRemove) {
          delete state[item];
        }
        break;
      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
