'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const param of actions) {
    switch (param.type) {
      case 'addProperties':
        Object.assign(state, param.extraData);
        break;

      case 'removeProperties':
        for (const i of param.keysToRemove) {
          delete state[i];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }
}

module.exports = transformState;
