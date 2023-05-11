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
        for (const value of obj.keysToRemove) {
          if (state[value]) {
            delete state[value];
          }
        }
        break;

      case `clear`:
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
