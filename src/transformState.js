'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties' :
        for (const key in action.extraData) {
          state[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    };
  });
}

module.exports = transformState;
