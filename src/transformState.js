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
        for (const keyToDel of key.keysToRemove) {
          delete state[keyToDel];
        }
        break;

      case 'clear':
        for (const keyOfState in state) {
          delete state[keyOfState];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
