'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        for (const ent of Object.entries(action.extraData)) {
          state[ent[0]] = ent[1];
        }
        break;
      }

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      }

      case `clear`: {
        for (const key in state) {
          delete state[key];
        }
        break;
      }

      default: {
        break;
      }
    }
  }
}

module.exports = transformState;
