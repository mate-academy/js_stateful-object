'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (let i = 0; i < action.keysToRemove.length; i++) {
        delete state[action.keysToRemove[i]];
      }
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }
  }
}

module.exports = transformState;
