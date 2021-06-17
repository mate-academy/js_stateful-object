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
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
    }
  }
}

module.exports = transformState;
