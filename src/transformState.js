'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;

      case 'removeProperties':
        keysToRemove.forEach(key => delete state[key]);
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      default:
        break;
    };
  };
};

module.exports = transformState;
