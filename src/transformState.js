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
      const arr = act.keysToRemove;

      for (const key of arr) {
        delete state[key];
      }
    }

    if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
