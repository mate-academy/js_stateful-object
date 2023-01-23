'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const copiedState = state;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(copiedState, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      const arr = actions[i].keysToRemove;

      for (let k = 0; k < arr.length; k++) {
        delete copiedState[arr[k]];
      }
    } else if (actions[i].type === 'clear') {
      for (const key in copiedState) {
        if (copiedState.hasOwnProperty(key)) {
          delete copiedState[key];
        }
      }
    }
  }
}

module.exports = transformState;
