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
        const toRemove = obj.keysToRemove;

        for (const rem of toRemove) {
          delete state[rem];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;

      default:
        throw new Error('Error: obj.type is not defined');
    }
  }
}

module.exports = transformState;
