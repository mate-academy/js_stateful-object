'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const ourAcrion of actions) {
    switch (ourAcrion.type) {
      case 'addProperties':
        Object.assign(state, ourAcrion.extraData);
        break;

      case 'removeProperties':
        for (const itemToDelete of ourAcrion.keysToRemove) {
          delete state[itemToDelete];
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
