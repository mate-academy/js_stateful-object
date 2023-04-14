'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act.type === 'addProperties') {
      for (act.type of actions) {
        Object.assign(state, act.extraData);
      }
    }

    if (act.type === 'removeProperties') {
      for (const type of act.keysToRemove) {
        delete state[type];
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
