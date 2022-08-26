'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj['extraData']);
        break;

      case 'removeProperties':
        for (const key of obj['keysToRemove']) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const name in state) {
          delete state[name];
        }
    }
  }

  return state;
}

module.exports = transformState;
