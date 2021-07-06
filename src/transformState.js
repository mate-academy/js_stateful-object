'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act.type === 'addProperties') {
      Object.assign(state, act.extraData);
    };

    if (act.type === 'removeProperties') {
      for (let i = 0; i < act.keysToRemove.length; i++) {
        delete state[act.keysToRemove[i]];
      };
    };

    if (act.type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }

  return state;
}

module.exports = transformState;
