'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    switch (true) {
      case actions[i].type === 'addProperties':
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        }
        break;

      case actions[i].type === 'removeProperties':
        for (const key of actions[i].keysToRemove) {
          delete state[key];
        }
        break;

      case actions[i].type === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
