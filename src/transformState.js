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
        (actions[i].keysToRemove).map(key => {
          delete state[key];
        });
        break;
      case 'clear':
        Object.keys(state).map(key => {
          delete state[key];
        });
        break;
      default:
        break;
    }
  }
}
module.exports = transformState;
