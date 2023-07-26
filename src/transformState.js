'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        const { extraData } = action;

        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        const { keysToRemove } = action;

        for (const keyToRemove of keysToRemove) {
          if (keyToRemove in state) {
            delete state[keyToRemove];
          }
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
    }
  }
}
module.exports = transformState;
