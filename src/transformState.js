'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const direct of actions) {
    switch (direct.type) {
      case 'addProperties':
        Object.assign(state, direct.extraData);
        break;

      case 'removeProperties':
        for (const key of direct.keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
    }
  }
}

module.exports = transformState;
