'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = state;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = Object.assign(state, action.extraData);
    } else if (action.type === 'clear') {
      for (const prop in state) {
        if (newState.hasOwnProperty(prop)) {
          delete newState[prop];
        }
      }
    } else if (action.type === 'removeProperties') {
      for (let i = 0; i < action.keysToRemove.length; i++) {
        const key = action.keysToRemove[i];

        delete newState[key];
      }
    }
  }

  return newState;
}

module.exports = transformState;
