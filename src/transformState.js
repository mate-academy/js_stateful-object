'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    // type contains a string: 'addProperties', 'removeProperties' or 'clear';

    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      obj.keysToRemove.every((element) => delete state[element]);
    }

    if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      };
    }
  }

  return state;
}

module.exports = transformState;
