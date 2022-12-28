'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        action.keysToRemove.forEach(item => {
          delete state[item];
        });
        break;
      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
