'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    switch (prop.type) {
      case 'addProperties':
        for (const key in prop.extraData) {
          state[key] = prop.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key of prop.keysToRemove) {
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
