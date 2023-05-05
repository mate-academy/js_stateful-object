'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    let whatToDo = action.type;

    switch (whatToDo) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(function(keyToRemove) {
          delete state[keyToRemove];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default: return;
    }
  }

  return state;
}

module.exports = transformState;
