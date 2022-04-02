'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item in actions) {
    for (const keys in actions[item]) {
      switch (actions[item][keys]) {
        case 'addProperties':
          for (const data in actions[item].extraData) {
            state[data] = actions[item].extraData[data];
          }
          break;

        case 'removeProperties':
          for (const remove of actions[item].keysToRemove) {
            delete state[remove];
          }
          break;

        case 'clear':
          for (const clear in state) {
            delete state[clear];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
