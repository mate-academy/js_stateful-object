'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    } else if (action.type === 'removeProperties') {
      const values = Object.values(action.keysToRemove);

      for (const value of values) {
        if (state[value]) {
          delete state[value];
        }
      }
    } else if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }
  }

  return state;
}

module.exports = transformState;
