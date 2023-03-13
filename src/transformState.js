'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    switch (prop.type) {
      case 'addProperties':
        for (const extra in prop.extraData) {
          state[extra] = prop.extraData[extra];
        }
        break;

      case 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;

      case 'removeProperties':
        for (const del of prop.keysToRemove) {
          delete state[del];
        }
    }
  }

  return state;
}

module.exports = transformState;
