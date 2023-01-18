'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const key in obj) {
      switch (obj[key]) {
        case 'addProperties':
          Object.assign(state, obj.extraData);
          break;

        case 'removeProperties':
          for (const keys in state) {
            if (obj.keysToRemove.includes(keys)) {
              delete state[keys];
            }
          }
          break;

        case 'clear':
          for (const keys in state) {
            delete state[keys];
          }
          break;
      }
    }
  }

  return state;
}

module.exports = transformState;
