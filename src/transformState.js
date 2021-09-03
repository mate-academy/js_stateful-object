'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionKey of actions) {
    switch (actionKey.type) {
      case ('addProperties'): {
        Object.assign(state, actionKey.extraData);
        break;
      }

      case ('clear'): {
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
      }

      case ('removeProperties'): {
        for (const prop of actionKey.keysToRemove) {
          delete state[prop];
        }
        break;
      }
    }
  }

  return state;
}
module.exports = transformState;
