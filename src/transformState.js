'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const givenProperty in actions[i].extraData) {
        state[givenProperty] = actions[i].extraData[givenProperty];
      }
    } else if (actions[i].type === 'removeProperties') {
      for (const removingProp in actions[i].keysToRemove) {
        delete state[actions[i].keysToRemove[removingProp]];
      }
    } else if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
