'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        Object.keys(state).forEach((key) => delete state[key]);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;
    }
  }
}

module.exports = transformState;
