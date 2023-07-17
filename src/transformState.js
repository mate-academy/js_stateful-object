'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear': {
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      }

      case 'removeProperties': {
        for (const value of Object.values(action.keysToRemove)) {
          delete state[value];
        }
        break;
      }

      case 'addProperties': {
        Object.assign(state, action.extraData);
        break;
      }

      default: {
        return 'There aren\'t anything to change';
      }
    }
  }
}

module.exports = transformState;
