'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    switch (i.type) {
      case 'addProperties': {
        Object.assign(state, i.extraData);
        break;
      }

      case 'removeProperties': {
        for (const j of i.keysToRemove) {
          delete state[j];
        }
        break;
      }

      case 'clear': {
        for (const k in state) {
          delete state[k];
        }
        break;
      }
    }
  }
}

module.exports = transformState;
