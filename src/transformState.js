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
        break;

      case 'removeProperties':
        for (const del of obj.keysToRemove) {
          delete state[del];
        }
        break;

      case 'clear':
        for (const el in state) {
          delete state[el];
        }
    }
  }
}

module.exports = transformState;
