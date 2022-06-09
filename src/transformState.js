'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const actionsObject of actions) {
    switch (actionsObject.type) {
      case 'addProperties' : {
        Object.assign(state, actionsObject.extraData);
        break;
      }

      case 'removeProperties' : {
        for (const propDel of actionsObject.keysToRemove) {
          delete state[propDel];
        }
        break;
      }

      case 'clear' : {
        for (const keys in state) {
          delete state[keys];
        }
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
