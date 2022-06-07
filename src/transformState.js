'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const prop of actions) {
    switch (prop.type) {
      case 'addProperties':
        Object.assign(state, prop.extraData);
        break;

      case 'removeProperties':
        for (const value of prop.keysToRemove) {
          delete state[value];
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
