'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(element => {
          delete state[element];
        });
        break;

      case 'clear' :
        for (const properties in state) {
          delete state[properties];
        }
        break;

      default:
        throw Error('Wrong properties. Please contact with support');
    }
  }

  return state;
}

module.exports = transformState;
