'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const obj = actions[i];

    switch (obj.type) {
      case 'addProperties' :
        for (const key in obj.extraData) {
          state[key] = obj.extraData[key];
        }
        break;
      case 'removeProperties' :
        for (const key of obj.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
