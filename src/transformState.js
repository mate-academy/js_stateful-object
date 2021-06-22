'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    if (element.type === 'addProperties') {
      Object.assign(state, element.extraData);
    } else if (element.type === 'removeProperties') {
      for (const key of element.keysToRemove) {
        delete state[key];
      }
    } else if (element.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
