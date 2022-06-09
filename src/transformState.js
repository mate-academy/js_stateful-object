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

      case 'clear':
        for (const stateProp in state) {
          delete state[stateProp];
        }
        break;

      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
        break;
    }
  }
}

module.exports = transformState;
