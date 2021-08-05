'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'clear':
        for (const i in state) {
          delete state[i];
        }
        break;

      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const arr of key.keysToRemove) {
          if (arr in state) {
            delete state[arr];
          }
        }
    }
  }
}

module.exports = transformState;
