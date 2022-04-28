'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        for (const removeArr of obj.keysToRemove) {
          delete state[removeArr];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }
}

module.exports = transformState;
