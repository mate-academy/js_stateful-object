'use strict';

/**
 * @param {Object} state
 * @param {Object[]} is
 */
function transformState(state, is) {
  for (const i of is) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(state, i.extraData);
        break;

      case 'removeProperties':
        for (const key of i.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
