'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'clear':
        for (const element in state) {
          delete state[element];
        }
        break;

      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (let index = 0; index < actions[i].keysToRemove.length; index++) {
          delete state[actions[i].keysToRemove[index]];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
