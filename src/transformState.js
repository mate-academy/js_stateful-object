'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const part in actions) {
    const obj = actions[part];

    if (obj.type === 'addProperties') {
      Object.assign(state, obj['extraData']);
    }

    if (obj.type === 'removeProperties') {
      for (const value of obj.keysToRemove) {
        if (state[value]) {
          delete state[value];
        }
      }
    }

    if (obj.type === `clear`) {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
