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
          for (const i of action.keysToRemove) {
            delete
            state[i];
          }
        }
      }

      if (action[key] === 'clear') {
        for (const i in state) {
          if (i in state) {
            delete state[i];
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
