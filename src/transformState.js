'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    switch (actions[i].type) {
      case 'addProperties': {
        for (const ent of Object.entries(actions[i].extraData)) {
          state[ent[0]] = ent[1];
        }
        break;
      }

      case 'removeProperties': {
        for (const key of actions[i].keysToRemove) {
          delete state[key];
        }
        break;
      }

      case `clear`: {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
