'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties': {
        Object.assign(state, action.extraData);
        break;
      }

      case 'removeProperties': {
        action.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }
        break;
      }

      default:
        throw new Error(`Sorry i don't know this statement: ${action.type}`);
    }
  });
}

module.exports = transformState;
