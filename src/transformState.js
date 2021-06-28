'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      for (const extraDataKey in actions[key].extraData) {
        state[extraDataKey] = actions[key].extraData[extraDataKey];
      }
    } else if (actions[key].type === 'removeProperties') {
      for (const value of actions[key].keysToRemove) {
        delete state[value];
      }
    } else {
      for (const key2 in state) {
        delete state[key2];
      }
    }
  }
}

module.exports = transformState;
