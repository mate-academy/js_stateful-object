'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        Object.assign(state, { ...actions[action].extraData });
        break;
      case 'removeProperties':
        for (const keyToRemove in actions[action].keysToRemove) {
          delete state[actions[action].keysToRemove[keyToRemove]];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        throw new Error('Array have not correct action value');
    }
  }
}

module.exports = transformState;
