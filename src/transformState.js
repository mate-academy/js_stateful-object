'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'clear':
        for (const wey in state) {
          delete state[wey];
        }
        break;

      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const sey of key.keysToRemove) {
          delete state[sey];
        }
    }
  }
}

module.exports = transformState;
