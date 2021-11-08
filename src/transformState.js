'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'removeProperties':
        for (const del of action.keysToRemove) {
          delete state[del];
        }

        break;

      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
