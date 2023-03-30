'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return 'Error, Wrong action provided';
    }

    return state;
  });
}

module.exports = transformState;
