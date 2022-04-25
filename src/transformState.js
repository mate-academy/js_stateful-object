'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;

      case 'removeProperties':
        for (const i of actions[key].keysToRemove) {
          delete state[i];
        }
        break;

      case 'clear':
        for (const i in state) {
          delete state[i];
        }
        break;
    }
  }
}

module.exports = transformState;
