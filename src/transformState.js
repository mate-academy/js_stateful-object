'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const types of actions) {
    switch (types.type) {
      case 'addProperties':
        Object.assign(state, types.extraData);
        break;

      case 'removeProperties':
        for (const key of types.keysToRemove) {
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
