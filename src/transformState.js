'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'removeProperties':
        for (let y = 0; y < actions[i].keysToRemove.length; y++) {
          delete state[actions[i].keysToRemove[y]];
        }
        break;

      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
