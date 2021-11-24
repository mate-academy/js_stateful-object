'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties' :
        for (const keyToRemove of action.keysToRemove) {
          if (state.hasOwnProperty(keyToRemove)) {
            delete state[keyToRemove];
          }
        }
        break;
      case `clear` :
        for (const s in state) {
          delete state[s];
        }
        break;
    }
  }
}

module.exports = transformState;
