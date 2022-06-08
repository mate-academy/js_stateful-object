'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const args of actions) {
    switch (args.type) {
      case 'addProperties':
        Object.assign(state, args.extraData);
        break;

      case 'removeProperties':
        for (const keyToRemove of args.keysToRemove) {
          if (state.hasOwnProperty(keyToRemove)) {
            delete state[keyToRemove];
          }
        }
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
