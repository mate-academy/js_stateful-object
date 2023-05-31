'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act.type === 'addProperties') {
      for (const addItem in act.extraData) {
        state[addItem] = act.extraData[addItem];
      }
    }

    if (act.type === 'removeProperties') {
      for (const removeItem of act.keysToRemove) {
        delete state[removeItem];
      }
    }

    if (act.type === 'clear') {
      for (const st in state) {
        delete state[st];
      }
    }
  }

  return state;
}

module.exports = transformState;
