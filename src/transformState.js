'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    if (element.type === 'addProperties') {
      for (const key in element.extraData) {
        state[key] = element.extraData[key];
      }
    } else if (element.type === 'removeProperties') {
      for (const item of element.keysToRemove) {
        delete state[item];
      }
    } else if (element.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
