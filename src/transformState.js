'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, { ...obj.extraData });
        break;

      case 'removeProperties':
        for (const i of obj.keysToRemove) {
          delete state[i];
        }
        break;

      case 'clear':
        for (const i in state) {
          delete state[i];
        }
        break;

      default:
    }
  }
}

module.exports = transformState;
