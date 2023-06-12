'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const obj = action.extraData;

      for (const key in obj) {
        state[key] = obj[key];
      }

      // console.log(action.type);
    } else if (action.type === 'removeProperties') {
      const array = action.keysToRemove;

      for (const item of array) {
        if (state[item] !== undefined) {
          delete state[item];
        }
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
