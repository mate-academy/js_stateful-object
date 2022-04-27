'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties' :
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties' :
        for (const item of key.keysToRemove) {
          delete state[item];
        }
        break;

      case 'clear' :
        for (const del in state) {
          delete state[del];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
