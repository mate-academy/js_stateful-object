'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const arr of actions) {
    switch (arr['type']) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;

      case 'addProperties':
        Object.assign(state, arr['extraData']);
        break;

      case 'removeProperties':
        for (const prop of arr['keysToRemove']) {
          delete state[prop];
        };
    }
  }
}

module.exports = transformState;
