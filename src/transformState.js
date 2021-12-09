'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = state;

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        newState = Object.assign(state, actions[i].extraData);
        break;
      case 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete state[actions[i].keysToRemove[j]];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return newState;
    }
  }

  return newState;
}

module.exports = transformState;
