'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    const { extraData, keysToRemove, type } = object;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const keyOfRemove of keysToRemove) {
          delete state[keyOfRemove];
        }
        break;

      case 'clear':
        for (const keyOfState in state) {
          delete state[keyOfState];
        }
    }
  }

  return state;
}

module.exports = transformState;
