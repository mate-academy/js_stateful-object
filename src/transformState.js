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
        obj.keysToRemove.every((element) => delete state[element]);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
