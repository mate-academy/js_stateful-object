'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    switch (elem.type) {
      case 'addProperties':
        for (const keys in elem.extraData) {
          state[keys] = elem.extraData[keys];
        }
        break;
      case 'removeProperties':
        for (const elem1 of elem.keysToRemove) {
          delete state[elem1];
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
