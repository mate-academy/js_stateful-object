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
        for (const properties of action.keysToRemove) {
          delete state[properties];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return new Error('something went wrong' + action.type);
    }
  }
}

module.exports = transformState;
