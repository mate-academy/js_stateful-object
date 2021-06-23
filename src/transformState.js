'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    }

    if (actions[key].type === 'removeProperties') {
      const remove = Object.assign([], actions[key].keysToRemove);

      for (const removeKey of remove) {
        delete state[removeKey];
      }
    }

    if (actions[key].type === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }
  }
}
module.exports = transformState;
