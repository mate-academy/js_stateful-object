'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const fixedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(fixedState, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete fixedState[key];
        }
        break;

      case 'clear':
        for (const key in fixedState) {
          delete fixedState[key];
        }
        break;

      default:
        throw Error('unknown action type');
    }
  }

  return fixedState;
}

module.exports = transformState;
