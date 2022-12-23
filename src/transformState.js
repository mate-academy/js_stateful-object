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
        for (let n = 0; n < actions[i].keysToRemove.length; n++) {
          delete state[actions[i].keysToRemove[n]];
        };
        break;

      default:
        Object.keys(state).forEach(n => delete state[n]);
    }
  }

  return state;
}

module.exports = transformState;
