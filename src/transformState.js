'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const arr of actions) {
    switch (true) {
      case arr['type'] === 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;

      case arr['type'] === 'addProperties':
        Object.assign(state, arr['extraData']);
        break;

      case arr['type'] === 'removeProperties':
        for (const prop of arr['keysToRemove']) {
          delete state[prop];
        };
    }
  }
}

module.exports = transformState;
