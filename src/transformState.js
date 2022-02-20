'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (actions[i].type === 'removeProperties') {
      const arrKeyDelete = actions[i].keysToRemove;

      for (const key of arrKeyDelete) {
        delete state[key];
      }
    }

    if (actions[i].type === 'addProperties') {
      const objKeyJoin = actions[i].extraData;

      Object.assign(state, objKeyJoin);
    }
  }

  return state;
}

module.exports = transformState;
