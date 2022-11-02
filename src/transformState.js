'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
    }
  }
}

module.exports = transformState;
