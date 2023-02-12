'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newState, action.extraData);
        continue;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete newState[key];
        }
        continue;

      case 'clear':
        for (const key in newState) {
          delete newState[key];
        }
        continue;
    }
  }
}

module.exports = transformState;
