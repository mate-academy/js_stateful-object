'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const expr = action.type;

    switch (expr) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (let i = 0; i < action.keysToRemove.length; i++) {
          delete state[action.keysToRemove[i]];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }
  }
}

module.exports = transformState;
