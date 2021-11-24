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
        Object.assign(state, action[`extraData`]);
        break;
      case 'removeProperties' :
        for (const rem of action['keysToRemove']) {
          if (state.hasOwnProperty(rem)) {
            delete state[rem];
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
