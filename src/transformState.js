'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties': {
        for (const [key, value] of Object.entries(obj.extraData)) {
          state[key] = value;
        }

        break;
      }

      case 'removeProperties': {
        for (const key of obj.keysToRemove) {
          delete state[key];
        }

        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }

        break;
      }
    }
  }
}

module.exports = transformState;
