'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    switch (elem.type) {
      case 'addProperties':
        for (const key in elem.extraData) {
          state[key] = elem.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const index of elem.keysToRemove) {
          delete state[index];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
