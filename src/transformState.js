'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (actions[i].type === 'addProperties') {
      for (const action in actions[i].extraData) {
        state[action] = actions[i].extraData[action];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const key in state) {
        for (const elem of actions[i].keysToRemove) {
          if (elem === key) {
            delete state[key];
          }
        }
      }
    }
  }
}

module.exports = transformState;
