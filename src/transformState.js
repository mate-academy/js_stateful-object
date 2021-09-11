'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    switch (i.type) {
      case 'addProperties':
        for (const key in i.extraData) {
          state[key] = i.extraData[key];
        }
        break;

      case 'removeProperties':
        i.keysToRemove.forEach(j => delete state[j]);
        break;

      case 'clear':
        for (const k in state) {
          delete state[k];
        }
    }
  }

  return state;
}

module.exports = transformState;
