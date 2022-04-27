'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties' :

        Object.assign(state, key.extraData);
        break;

      case 'removeProperties' :

        for (const keyRemove of key.keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear' :

        for (const keyState in state) {
          delete state[keyState];
        }
    }
  }

  return state;
}
module.exports = transformState;
