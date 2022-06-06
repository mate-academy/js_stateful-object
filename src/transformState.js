'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {

      case 'addProperties':
        Object.assign(state, actions[key].extraData);

        break;

      case 'removeProperties':
        for (const property of actions[key].keysToRemove) {
          delete state[property];
        }

        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }

        break;

      default:

        return state;
    }
  }
}

module.exports = transformState;
