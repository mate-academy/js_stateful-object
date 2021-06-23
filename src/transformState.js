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
      case 'clear':
        for (const all in state) {
          delete state[all];
        }
        break;
      case 'removeProperties':
        for (const value of item.keysToRemove) {
          delete state[value];
        };
        break;
    }
  }
}

module.exports = transformState;
