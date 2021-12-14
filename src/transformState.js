'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    }

    if (act.type === 'removeProperties') {
      act.keysToRemove.forEach(key => delete state[key]);
    }

    if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
