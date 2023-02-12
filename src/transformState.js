'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'addProperties') {
        const keyValue = Object.entries(action.extraData);

        for (const [extraKey, value] of keyValue) {
          if (action.extraData.hasOwnProperty(extraKey)) {
            state[extraKey] = value;
          }
        }
      } else if (action[key] === 'removeProperties') {
        for (const deleteKey of action.keysToRemove) {
          if (state.hasOwnProperty(deleteKey)) {
            delete state[deleteKey];
          }
        }
      } else if (action[key] === 'clear') {
        for (const stateKey in state) {
          delete state[stateKey];
        }
      }
    }
  }
}

module.exports = transformState;
