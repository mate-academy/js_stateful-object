'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      switch (action[key]) {
        case 'addProperties':
          const keyValue = Object.entries(action.extraData);

          for (const [extraKey, value] of keyValue) {
            if (action.extraData.hasOwnProperty(extraKey)) {
              state[extraKey] = value;
            }
          }

          break;

        case 'removeProperties':
          for (const deleteKey of action.keysToRemove) {
            if (state.hasOwnProperty(deleteKey)) {
              delete state[deleteKey];
            }
          }

          break;

        case 'clear':
          for (const stateKey in state) {
            delete state[stateKey];
          }

          break;
      }
    }
  }
}

module.exports = transformState;
