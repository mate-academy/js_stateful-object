'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        Object.assign(state, actions[key].extraData);
        break;

      case 'removeProperties':
        for (const keyRemove of actions[key].keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
    }
  }
}
module.exports = transformState;
