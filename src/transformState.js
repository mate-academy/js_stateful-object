'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'addProperties') {
        Object.assign(state, action.extraData);
      } else if (action[key] === 'removeProperties') {
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
      } else if (action[key] === 'clear') {
        for (const prop in state) {
          delete state[prop];
        }
      }
    }
  }
}

module.exports = transformState;
