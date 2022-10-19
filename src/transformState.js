'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        const removeValues = actions[i].keysToRemove;

        for (const toRemove of removeValues) {
          for (const keys in state) {
            if (toRemove === keys) {
              delete state[keys];
            }
          }
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
