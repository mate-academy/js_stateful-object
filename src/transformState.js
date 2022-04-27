'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

/**
  * @param {Object} state
  * @param {Object[]} actions
  */
function transformState(state, actions) {
  // write code here
  let keysOfActions;

  for (keysOfActions of actions) {
    if (keysOfActions.type === 'addProperties') {
      const keysExtra = Object.keys(keysOfActions.extraData);

      for (let countArr = 0; countArr < keysExtra.length; countArr++) {
        for (const keyForExtra of keysExtra) {
          state[keyForExtra] = keysOfActions.extraData[keyForExtra];
        }
      }
    }

    if (keysOfActions.type === 'removeProperties') {
      for (const keyForRemove of keysOfActions.keysToRemove) {
        delete state[keyForRemove];
      }
    }

    if (keysOfActions.type === 'clear') {
      const keysState = Object.keys(state);

      for (const keyForState of keysState) {
        delete state[keyForState];
      }
    }
  }

  return state;
}

module.exports = transformState;
