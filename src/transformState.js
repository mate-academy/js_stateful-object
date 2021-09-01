'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionKey of actions) {
    for (const key in actionKey) {
      if (actionKey[key] === 'addProperties') {
        Object.assign(state, actionKey.extraData);
      }

      if (actionKey[key] === 'clear') {
        for (const stateKey in state) {
          delete state[stateKey];
        }
      }

      if (actionKey[key] === 'removeProperties') {
        for (const prop of actionKey.keysToRemove) {
          delete state[prop];
        }
      }
    }
  }

  return state;
}
module.exports = transformState;
