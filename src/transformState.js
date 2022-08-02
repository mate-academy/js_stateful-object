'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const key in actions[i].extraData) {
        state[key] = actions[i].extraData[key];
      }
    }

    if (actions[i].type === 'removeProperties') {
      for (const keyToRemove of actions[i].keysToRemove) {
        delete state[keyToRemove];
      }
    }

    if (actions[i].type === 'clear') {
      for (const keyOfState in state) {
        delete state[keyOfState];
      }
    }
  }
}

module.exports = transformState;
