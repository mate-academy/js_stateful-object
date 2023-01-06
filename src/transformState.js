'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        };
        break;

      default:
        // eslint-disable-next-line no-console
        console.log('Action not found');
    }
  }
}

module.exports = transformState;
