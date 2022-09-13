'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (let index = 0; index < actions.length; index++) {
    switch (actions[index].type) {
      case 'addProperties':
        Object.assign(state, actions[index].extraData);
        break;

      case 'removeProperties':
        for (let keysToBeRemoved = 0;
          keysToBeRemoved < actions[index].keysToRemove.length;
          keysToBeRemoved++) {
          delete state[actions[index].keysToRemove[keysToBeRemoved]];
        }
        break;

      case 'clear':
        for (const states in state) {
          delete state[states];
        }
        break;
      default:
        return 'unknown action input';
    }
  }
}
module.exports = transformState;
