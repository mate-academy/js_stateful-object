'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let arr = [];

  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        arr = obj.keysToRemove;

        for (const key of arr) {
          delete state[key];
        }
        break;

      case 'clear':
        arr = Object.keys(state);

        for (const key of arr) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
