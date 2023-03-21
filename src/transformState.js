'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    if (actions[i]['type'] === 'addProperties') {
      Object.assign(state, actions[i]['extraData']);
    } else if (actions[i]['type'] === 'removeProperties') {
      for (const key of actions[i]['keysToRemove']) {
        delete state[key];
      }
    } else if (actions[i]['type'] === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
