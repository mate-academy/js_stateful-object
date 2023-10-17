'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        if (action.extraData && typeof action.extraData === 'object') {
          Object.assign(state, action.extraData);
        }
        break;
      case 'removeProperties':
        if (action.keysToRemove && Array.isArray(action.keysToRemove)) {
          action.keysToRemove.forEach(key => {
            if (state.hasOwnProperty(key)) {
              delete state[key];
            }
          });
        }
        break;
      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      default:
    }
  });
}

module.exports = transformState;
