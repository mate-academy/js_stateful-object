'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    const { type, extraData, keysToRemove } = prop;

    switch (type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const rem of keysToRemove) {
          delete state[rem];
        }
    }
  }

  return state;
}

module.exports = transformState;
