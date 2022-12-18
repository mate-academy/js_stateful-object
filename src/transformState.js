'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    for (const key in object) {
      switch (object[key]) {
        case 'addProperties':
          Object.assign(state, object.extraData);
          break;

        case 'removeProperties':
          for (const value of object.keysToRemove) {
            delete state[value];
          }
          break;

        case 'clear':
          for (const i in state) {
            delete state[i];
          }
      }
    }
  }

  return state;
}

module.exports = transformState;
