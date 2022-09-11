'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const correctState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(correctState, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete correctState[key];
        }
        break;

      case 'clear':
        for (const key in correctState) {
          delete correctState[key];
        }
        break;
    }
  }

  return correctState;
}

module.exports = transformState;
