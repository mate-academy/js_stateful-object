'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const step of actions) {
    if (step.type === 'addProperties') {
      Object.assign(state, step.extraData);
    }

    if (step.type === 'removeProperties') {
      const keysToDelete = step.keysToRemove;

      for (const key of keysToDelete) {
        delete state[key];
      }
    }

    if (step.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
