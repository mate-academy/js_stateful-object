'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    for (const key in actions[i]) {
      switch (actions[i][key]) {
        case 'addProperties':
          for (const key1 in actions[i]['extraData']) {
            state[key1] = actions[i]['extraData'][key1];
          }
          break;

        case 'removeProperties':
          for (const key1 of actions[i]['keysToRemove']) {
            delete state[key1];
          }
          break;

        case 'clear':
          for (const key1 in state) {
            delete state[key1];
          }
      }
    }
  }
}

module.exports = transformState;
