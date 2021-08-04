'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const data of actions) {
    switch (data.type) {
      case 'addProperties' :
        Object.assign(state, data.extraData);
        break;

      case 'removeProperties' :
        for (const key of data.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear' :
        for (const property in state) {
          delete state[property];
        }
        break;
    }
  }
}

module.exports = transformState;
