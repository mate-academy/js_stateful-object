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
        for (const keys of action.keysToRemove) {
          delete state[keys];
        }
        break;

      case 'clear':
        for (const name in state) {
          delete state[name];
        }
        break;
    }
  }
}

module.exports = transformState;
