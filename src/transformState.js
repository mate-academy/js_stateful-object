'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        for (const [prop, value] of Object.entries(obj.extraData)) {
          state[prop] = value;
        }
        break;

      case 'removeProperties':
        for (const prop of obj.keysToRemove) {
          delete state[prop];
        };
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
