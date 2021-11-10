'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'addProperties': {
        const addProp = action.extraData;

        for (const prop in addProp) {
          state[prop] = addProp[prop];
        }
        break;
      }

      case 'removeProperties': {
        const keys = action.keysToRemove;

        for (const key of keys) {
          delete state[key];
        }
        break;
      }

      case 'clear': {
        for (const prop in state) {
          delete state[prop];
        }
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
