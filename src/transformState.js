'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties' :
        for (const type of action.keysToRemove) {
          delete state[type];
        }
        break;

      case 'clear' :
        for (const del in state) {
          delete state[del];
        }
        break;

      default:
        throw new Error('error');
    }
  }
}

module.exports = transformState;
