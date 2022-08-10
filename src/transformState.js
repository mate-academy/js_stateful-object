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
        for (const keyToRemove of action.keysToRemove) {
          if (state.hasOwnProperty(keyToRemove)) {
            delete state[keyToRemove];
          }
        };
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
