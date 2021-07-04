'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act in actions) {
    if (actions[act].type === 'addProperties') {
      Object.assign(state, actions[act].extraData);
    };

    if (actions[act].type === 'removeProperties') {
      for (let i = 0; i < actions[act].keysToRemove.length; i++) {
        delete state[actions[act].keysToRemove[i]];
      };
    };

    if (actions[act].type === 'clear') {
      for (const j in state) {
        delete state[j];
      }
    }
  }

  return state;
}
module.exports = transformState;
