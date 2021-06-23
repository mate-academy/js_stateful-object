'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    switch (value.type) {
      case 'addProperties' : {
        Object.assign(state, value.extraData);
        break;
      }

      case 'removeProperties' : {
        for (const key of value.keysToRemove) {
          delete state[key];
        }
        break;
      }

      case 'clear' : {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}
module.exports = transformState;
