'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;
      case 'removeProperties':
        for (const action of actions[i].keysToRemove) {
          delete state[action];
        };
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        return state;
    }
  }
}

module.exports = transformState;
