'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => delete state[key]);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  });
}

module.exports = transformState;
