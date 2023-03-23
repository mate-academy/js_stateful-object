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

      case 'removeProperties':
        for (const value of action.keysToRemove) {
          delete state[value];
        };
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;
    }
  }
}

module.exports = transformState;
