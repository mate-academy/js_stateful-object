'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  });

  return state;
}

module.exports = transformState;
