'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        Object.assign(state, actions[action].extraData);
        break;
      case 'removeProperties':
        for (const key of actions[action].keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
      default:
        throw new Error('Wrong type');
    }
  }

  return state;
}

module.exports = transformState;
