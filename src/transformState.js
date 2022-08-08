'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const condition of actions) {
    switch (condition.type) {
      case 'addProperties': {
        Object.assign(state, condition.extraData);
        break;
      }

      case 'removeProperties': {
        for (const key of condition.keysToRemove) {
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
