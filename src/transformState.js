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
        action.keysToRemove.forEach(el => {
          delete state[el];
        });
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
