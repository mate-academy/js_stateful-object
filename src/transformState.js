'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const extraData = action.extraData;

        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        const keysToRemove = action.keysToRemove;

        for (const value of keysToRemove) {
          if (state.hasOwnProperty(value)) {
            delete state[value];
          }
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
