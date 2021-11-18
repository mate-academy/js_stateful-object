'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    } else if (act.type === 'removeProperties') {
      for (const key in act.keysToRemove) {
        delete (state[act.keysToRemove[key]]);
      }
    } else if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
