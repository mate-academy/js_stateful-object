'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const propertiesToAdd = action.extraData;

        for (const property in propertiesToAdd) {
          state[property] = propertiesToAdd[property];
        }
        break;
      }

      case 'removeProperties': {
        const propertiesToRemove = action.keysToRemove;

        for (const property of propertiesToRemove) {
          delete state[property];
        }
        break;
      }

      case 'clear': {
        for (const el in state) {
          delete state[el];
        }
        break;
      }
    }
  }
}

module.exports = transformState;
