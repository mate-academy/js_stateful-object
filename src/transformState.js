'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const toDo in action.extraData) {
        state[toDo] = action.extraData[toDo];
      }
    }

    if (action.type === 'removeProperties') {
      for (const remove of action.keysToRemove) {
        delete state[remove];
      }
    }

    if (action.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
