'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const operation of actions) {
    switch (operation.type) {
      case 'addProperties':
        Object.assign(state, operation.extraData);
        break;

      case 'removeProperties':
        for (const property of operation.keysToRemove) {
          delete state[property];
        };
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        };
        break;

      default:
        break;
    };
  };

  return state;
};

module.exports = transformState;
