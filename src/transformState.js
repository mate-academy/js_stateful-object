'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { extraData } = action;
    const { keysToRemove } = action;

    if (action.type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach(el => delete state[el]);
    }

    if (action.type === 'removeProperties') {
      keysToRemove.forEach(el => delete state[el]);
    }
  }
}

module.exports = transformState;
