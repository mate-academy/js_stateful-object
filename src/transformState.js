'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADDPROP = 'addProperties';
  const REMOVEPROP = 'removeProperties';
  const CLEAR = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADDPROP:
        Object.assign(state, action.extraData);
        break;
      case REMOVEPROP:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case CLEAR:
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        throw new Error('Unknown action type');
    }
  }

  return state;
}

module.exports = transformState;
