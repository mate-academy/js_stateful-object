'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i]['extraData']) {
      for (const keys in actions[i]['extraData']) {
        state[keys] = actions[i]['extraData'][keys];
      }
    } else if (actions[i]['keysToRemove']) {
      for (const values of actions[i]['keysToRemove']) {
        delete state[values];
      }
    } else if (actions[i]['type'] === 'clear') {
      for (const deleted in state) {
        delete state[deleted];
      }
    }
  }
}

module.exports = transformState;
