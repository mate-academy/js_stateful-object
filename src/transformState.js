'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const delKey of keysToRemove) {
          delete state[delKey];
        }
        break;
      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;
    }
  }
}

module.exports = transformState;
