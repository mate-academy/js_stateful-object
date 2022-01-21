'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.map(el => delete state[el]);
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;

      default:
        throw Error;
    }
  }

  return state;
}
module.exports = transformState;
