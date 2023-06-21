'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        Object.entries(action.extraData).forEach(([key, value]) => {
          state[key] = value;
        });
        break;

      case 'clear' :
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      case 'removeProperties' :
        action.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;
    }
  }
}

module.exports = transformState;
