'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let arr = [];

  for (let obj = 0; obj < actions.length; obj++) {
    if (actions[obj].type === 'addProperties') {
      Object.assign(state, actions[obj].extraData);
    }

    if (actions[obj].type === 'removeProperties') {
      arr = actions[obj].keysToRemove;

      for (const key of arr) {
        delete state[key];
      }
    }

    if (actions[obj].type === 'clear') {
      arr = Object.keys(state);

      for (const key of arr) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
