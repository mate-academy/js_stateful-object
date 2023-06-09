'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        continue;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }

        continue;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        continue;

      default:
        throw new Error(`Action type "${action.type}" does not exist`);
    }
  }

  return state;
}

module.exports = transformState;
