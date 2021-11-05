'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const prop of Object.keys(state)) {
          delete state[prop];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
