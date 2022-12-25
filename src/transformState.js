'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'addProperties':
        Object.assign(state, item.extraData);
        break;

      case 'removeProperties':
        for (const key of item.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
    }
  }
}

module.exports = transformState;
