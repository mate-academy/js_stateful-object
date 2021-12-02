'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;
      case 'removeProperties':
        for (const removeKey of key.keysToRemove) {
          delete state[removeKey];
        }
        break;
      case 'clear':
        for (const deleteKey in state) {
          delete state[deleteKey];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
