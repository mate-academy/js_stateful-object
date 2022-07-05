'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const act = action.type;
    const data = action.extraData;

    if (act === 'addProperties') {
      for (const key in data) {
        state[key] = data[key];
      }
    } else if (act === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    } else if (act === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
