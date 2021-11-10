'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties': {
        Object.assign(state, extraData);
        break;
      }

      case 'clear': {
        for (const del in state) {
          delete state[del];
        }
        break;
      }

      case 'removeProperties': {
        for (const remove of keysToRemove) {
          delete state[remove];
        }
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
