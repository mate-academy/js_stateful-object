'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const toDo of actions) {
    if (toDo.type === 'removeProperties') {
      for (const item of toDo.keysToRemove) {
        delete state[item];
      }
    }

    if (toDo.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (toDo.type === 'addProperties') {
      Object.assign(state, toDo.extraData);
    }
  }

  return state;
}

module.exports = transformState;
