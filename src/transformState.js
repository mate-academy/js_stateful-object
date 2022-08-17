'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const prop in action.keysToRemove) {
          delete state[action.keysToRemove[prop]];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
    }
  }
}

module.exports = transformState;
