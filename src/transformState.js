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
        for (const item of obj.keysToRemove) {
          delete state[item];
        }
        break;

      case 'clear':
        for (const item in state) {
          delete state[item];
        }
        break;

      default:
        return null;
    }
  }
}

module.exports = transformState;
