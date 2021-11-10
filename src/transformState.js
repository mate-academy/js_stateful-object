'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'removeProperties':
        for (const keyInState in state) {
          if (obj.keysToRemove.includes(keyInState)) {
            delete state[keyInState];
          }
        }
        break;

      case 'clear':
        for (const keyInState in state) {
          delete state[keyInState];
        }
        break;

      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;
    }
  }

  return state;
}

module.exports = transformState;
