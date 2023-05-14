'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (let key = 0; key < action.keysToRemove.length; key++) {
        const keyToRemove = action.keysToRemove[key];

        delete state[keyToRemove];
      }
    }
  }

  return state;
}

module.exports = transformState;
