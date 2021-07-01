'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;

      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete state[actions[i].keysToRemove[j]];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
