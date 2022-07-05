'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformstateate(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const propRemove of action.keysToRemove) {
          delete state[propRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformstateate;
