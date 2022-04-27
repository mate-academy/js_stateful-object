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
      for (const act of action.keysToRemove) {
        delete state[act];
      }
    }

    if (action.type === 'clear') {
      for (const del in state) {
        delete state[del];
      }
    }
  }

  return state;
}

module.exports = transformState;
