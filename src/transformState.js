'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const type of actions) {
    if (type === 'addProperties') {
      for (const extraData of actions) {
        Object.assign(state, extraData);
      }
    } else if (type === 'removeProperties') {
      for (const key of actions.keysToRemove) {
        delete state[key];
      }
    } else if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
