'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'clear') {
      for (const keyInState in state) {
        delete state[keyInState];
      }
    }

    if (obj.type === 'removeProperties') {
      for (const keyToRemove of obj.keysToRemove) {
        for (const keyInState in state) {
          if (keyInState === keyToRemove) {
            delete state[keyInState];
          }
        }
      }
    }

    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }
  }

  return state;
}

module.exports = transformState;
