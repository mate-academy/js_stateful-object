'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (item.type) {
      case 'clear':
        for (const cleared in state) {
          delete state[cleared];
        }
        break;
      case 'addProperties':
        Object.assign(state, item.extraData);
        break;
      case 'removeProperties':
        for (const key of item.keysToRemove) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
