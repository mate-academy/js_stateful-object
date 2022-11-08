'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        continue;

      case 'removeProperties':
        for (const removeKey of obj.keysToRemove) {
          delete state[removeKey];
        }
        continue;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        continue;
    }
  }

  return state;
}

module.exports = transformState;
