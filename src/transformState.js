'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // let newState = { ...state };

  for (const act of actions) {
    if (act.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (act.type === 'addProperties') {
      for (const key in act.extraData) {
        state[key] = act.extraData[key];
      }
    }

    if (act.type === 'removeProperties') {
      for (const remKey of act.keysToRemove) {
        delete state[remKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
