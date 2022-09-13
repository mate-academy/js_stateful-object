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
        for (const delProp of action['keysToRemove']) {
          delete state[delProp];
        }
        break;

      case 'clear':
        for (const delAllProp in state) {
          delete state[delAllProp];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
