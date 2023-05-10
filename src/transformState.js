'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const extraData = action.extraData;
    const keysToRemove = action.keysToRemove;

    if (action.type === 'addProperties') {
      for (const key in extraData) {
        state[key] = extraData[key];
      }
    } else if (action.type === 'removeProperties') {
      for (const value of keysToRemove) {
        delete state[value];
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
