'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let key = 0; key < actions.length; key++) {
    const action = actions[key];

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (let i = 0; i < action.keysToRemove.length; i++) {
        if (action.keysToRemove[i] in state) {
          delete state[action.keysToRemove[i]];
        }
      }
    }

    if (action.type === 'clear') {
      for (const value in state) {
        delete state[value];
      }
    }
  }
}

module.exports = transformState;
