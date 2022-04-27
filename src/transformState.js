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

        for (const j of key.keysToRemove) {
          delete state[j];
        }
        break;

      case 'clear' :

        for (const k in state) {
          delete state[k];
        }
    }
  }

  return state;
}
module.exports = transformState;
