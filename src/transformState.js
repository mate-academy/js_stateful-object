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
        for (const property of action.keysToRemove) {
          if (property in state) {
            delete state[property];
          }
        }
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;
    }
  }
}

module.exports = transformState;
