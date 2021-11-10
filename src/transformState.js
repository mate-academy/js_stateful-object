'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action in actions) {
    const type = actions[action].type;

    switch (type) {
      case 'addProperties': {
        const addProp = actions[action].extraData;

        for (const prop in addProp) {
          state[prop] = addProp[prop];
        }
        break;
      }

      case 'removeProperties': {
        const keys = actions[action].keysToRemove;

        for (const key in keys) {
          delete state[keys[key]];
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
