'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const key in state) {
          if (actions[i].keysToRemove.includes(key)) {
            delete state[key];
          }
        }
        break;

      case 'addProperties' :
        Object.assign(state, actions[i].extraData);
        break;
    }
  }
}

module.exports = transformState;
