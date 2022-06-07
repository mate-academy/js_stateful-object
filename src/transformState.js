'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const toDo of actions) {
    switch (toDo.type) {
      case 'addProperties':
        Object.assign(state, toDo.extraData);
        break;

      case 'removeProperties':
        for (const remove of toDo.keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }

        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
