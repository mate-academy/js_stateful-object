'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const parts of actions) {
    switch (parts.type) {
      case 'addProperties':
        Object.assign(state, parts.extraData);
        break;

      case 'removeProperties':
        for (const key of parts.keysToRemove) {
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

  return state;
}

module.exports = transformState;
