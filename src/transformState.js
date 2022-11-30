'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'addProperties') {
        Object.assign(state, action.extraData);
      }

      if (action[key] === 'removeProperties') {
        delete
        state[action.keysToRemove];

        if (action.keysToRemove.length > 1) {
          for (const value of action.keysToRemove) {
            delete
            state[value];
          }
        }
      }

      if (action[key] === 'clear') {
        for (const property in state) {
          if (property in state) {
            delete state[property];
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
