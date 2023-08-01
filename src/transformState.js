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
        action.keysToRemove.map(key => delete state[key]);
        break;
      case 'clear':
        Object.keys(state).map(key => delete state[key]);
        break;
      default:
        return new Error('Something wrong');
    }
  }
}

module.exports = transformState;
