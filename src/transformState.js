'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (item['type']) {
      case 'addProperties':
        Object.assign(state, item['extraData']);
        break;

      case 'removeProperties':
        for (const x of item['keysToRemove']) {
          delete state[x];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
