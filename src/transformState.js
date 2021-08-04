'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const ourObject of actions) {
    switch (ourObject.type) {
      case 'addProperties':
        Object.assign(state, ourObject.extraData);
        break;

      case 'removeProperties':
        for (let i = 0; i < ourObject.keysToRemove.length; i++) {
          delete state[ourObject.keysToRemove[i]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
