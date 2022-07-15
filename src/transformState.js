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
        for (const removeKeys of action.keysToRemove) {
          delete state[removeKeys];
        };
        break;

      case 'clear':
        for (const removeProperties in state) {
          delete state[removeProperties];
        };
        break;

      default:
        throw new Error('you can enter the corect value');
    }
  }
};

module.exports = transformState;
