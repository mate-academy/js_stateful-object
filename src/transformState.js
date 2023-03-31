'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => delete state[key]);
        break;

      case 'clear':
        Object.keys(state).forEach((key) => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
