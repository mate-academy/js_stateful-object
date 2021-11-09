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
        for (const remove of keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const member in state) {
          delete state[member];
        }
    }
  }
}

module.exports = transformState;
