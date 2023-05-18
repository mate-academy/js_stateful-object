'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const givenProperty in actions[i].extraData) {
          state[givenProperty] = actions[i].extraData[givenProperty];
        }

        break;

      case 'removeProperties':
        for (const removingProp in actions[i].keysToRemove) {
          delete state[actions[i].keysToRemove[removingProp]];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
