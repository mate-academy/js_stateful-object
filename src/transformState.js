'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(element => {
        delete state[element];
      });
    }

    if (action.type === 'clear') {
      for (const stat in state) {
        delete state[stat];
      }
    }
  }

  return state;
}

module.exports = transformState;
