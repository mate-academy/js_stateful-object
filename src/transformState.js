'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'clear') {
        for (const prop in state) {
          delete state[prop];
        }
      }

      if (key === 'type') {
        continue;
      } else if (key === 'extraData') {
        Object.assign(state, action[key]);
      } else if (key === 'keysToRemove') {
        for (const prop in action[key]) {
          delete state[action[key][prop]];
        }
      } else {
        return state;
      }
    }
  }

  return state;
}

module.exports = transformState;
