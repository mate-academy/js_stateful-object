'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const currentAction = actions[i];

    switch (currentAction.type) {
      case 'addProperties':
        for (const givenProperty in currentAction.extraData) {
          state[givenProperty] = currentAction.extraData[givenProperty];
        }

        break;

      case 'removeProperties':
        for (const removingProp in currentAction.keysToRemove) {
          delete state[currentAction.keysToRemove[removingProp]];
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
