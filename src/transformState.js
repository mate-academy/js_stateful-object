'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties':
        for (const key in item.extraData) {
          state[key] = item.extraData[key];
        };
        break;

      case 'removeProperties':
        for (const key in item.keysToRemove) {
          delete state[item.keysToRemove[key]];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
