'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(resultState, action.extraData);
        break;

      case 'removeProperties':
        for (const item of action.keysToRemove) {
          delete resultState[item];
        }
        break;

      case 'clear':
        for (const key in resultState) {
          delete resultState[key];
        }
        break;
    }
  }

  return resultState;
}

module.exports = transformState;
