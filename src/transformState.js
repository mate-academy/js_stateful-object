'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action['type']) {
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      case 'removeProperties':
        for (const delKey of action['keysToRemove']) {
          delete state[delKey];
        }
        break;

      case 'clear':
        for (const delKeys in state) {
          delete state[delKeys];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
