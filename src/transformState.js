'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const args of actions) {
    if (args.type === 'addProperties') {
      Object.assign(state, args.extraData);
    } else if (args.type === 'removeProperties') {
      for (const keyToRemove of args.keysToRemove) {
        if (state.hasOwnProperty(keyToRemove)) {
          delete state[keyToRemove];
        }
      }
    } else if (args.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
