'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const objAc of actions) {
    switch (objAc.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const el of objAc.keysToRemove) {
          delete state[el];
        }
        break;

      case 'addProperties':
        Object.assign(state, objAc.extraData);
        break;
    }
  }
}

module.exports = transformState;
