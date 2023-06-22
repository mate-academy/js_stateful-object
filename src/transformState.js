'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties' :
        Object.assign(state, extraData);
        break;

      case 'clear' :
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      case 'removeProperties' :
        keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      default :
        break;
    }
  }
}

module.exports = transformState;
