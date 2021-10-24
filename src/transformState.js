'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if ('extraData' in actions[i]) {
      Object.assign(state, actions[i]['extraData']);
    } else if ('keysToRemove' in actions[i]) {
      for (const key of actions[i]['keysToRemove']) {
        delete state[key];
      }
    } else if (actions[i]['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
