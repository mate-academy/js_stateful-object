'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        const arrKeyDelete = actions[i].keysToRemove;

        for (const key of arrKeyDelete) {
          delete state[key];
        }
        break;

      default:
        const objKeyJoin = actions[i].extraData;

        Object.assign(state, objKeyJoin);
    }
  }

  return state;
}

module.exports = transformState;
