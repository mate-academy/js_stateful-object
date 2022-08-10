'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      for (const del of actions[i].keysToRemove) {
        delete state[del];
      }
    } else if (actions[i].type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  };
}

module.exports = transformState;
