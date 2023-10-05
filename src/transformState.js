'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const keys of actions) {
    switch (keys.type) {
      case 'addProperties' :
        Object.assign(state, keys.extraData);

        break;
      case 'removeProperties' :
        for (const removing of keys.keysToRemove) {
          delete state[removing];
        }

        break;

      case 'clear' :
        for (const stateKeys in state) {
          delete state[stateKeys];
        }
    }
  }

  return state;
}

module.exports = transformState;
