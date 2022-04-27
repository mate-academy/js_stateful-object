'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const editState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(editState, action.extraData);
        break;
      case 'removeProperties':
        const arrKeysToRemove = action.keysToRemove;

        arrKeysToRemove.forEach(e => delete editState[e]);
        break;
      case 'clear':
        const arrKeysToClear = Object.keys(editState);

        arrKeysToClear.forEach(e => delete editState[e]);
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
