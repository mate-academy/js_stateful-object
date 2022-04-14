'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }

    switch (action.type) {
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
    }

    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
