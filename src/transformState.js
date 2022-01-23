'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keyForDelete of action.keysToRemove) {
          delete state[keyForDelete];
        }
        break;

      case 'clear':
        for (const keyOfState in state) {
          delete state[keyOfState];
        }
        break;

      default:
        break;
    }
  }
}
module.exports = transformState;
