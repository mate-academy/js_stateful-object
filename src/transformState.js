'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'removeProperties':
        for (const values of object.keysToRemove) {
          delete state[values];
        }
        break;

      case 'addProperties':
        Object.assign(state, object.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
