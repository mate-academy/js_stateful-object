'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  if (actions['type'] === 'addProperties') {
    for (const key in actions) {
      if (actions[key] === 'extraData') {
        for (const add in actions[key]) {
          state[add] = key[add];
        }
      }
    }
  }

  if (actions['type'] === 'removeProperties') {
    for (const remove of actions['keysToRemove']) {
      delete state[remove];
    }
  }

  if (actions['type'] === 'clear') {
    for (const clear in state) {
      delete state[clear];
    }
  }

  return state;
}

module.exports = transformState;
