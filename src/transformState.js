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

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties' :
        for (const keyForState of action.keysToRemove) {
          delete state[keyForState];
        }
        break;

      default:
        throw new Error('other type');
    }
  }

  return state;
}

module.exports = transformState;
