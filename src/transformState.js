'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const object of actions) {
    for (const key in object) {
      if (object[key] === 'clear') {
        for (const key2 in state) {
          delete state[key2];
        }
      }

      if (object[key] === 'addProperties') {
        Object.assign(state, object['extraData']);
      }

      if (object[key] === 'removeProperties') {
        for (const item of object['keysToRemove']) {
          delete state[item];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
