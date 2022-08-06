'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        Object.assign(state, object.extraData);
        break;

      case 'removeProperties':
        for (const keyRemove of object.keysToRemove) {
          delete state[keyRemove];
        }
        break;

      case 'clear':
        for (const keyClear in state) {
          delete state[keyClear];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
