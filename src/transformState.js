'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        }
        break;
      }

      case `removeProperties`: {
        for (const property of action.keysToRemove) {
          delete state[property];
        }
        break;
      }

      case `clear`: {
        for (const key in state) {
          delete state[key];
        }
        break;
      }
    }
  }
}

module.exports = transformState;
