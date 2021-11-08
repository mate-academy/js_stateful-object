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
      for (const removeKeys of element.keysToRemove) {
        delete state[removeKeys];
      }
    } else if (element.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
