'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in newState) {
          delete newState[key];
        }
        break;

      case 'addProperties':
        newState = Object.assign(
          newState,
          action.extraData
        );
        break;

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          if (Object.keys(newState).includes(key)) {
            delete newState[key];
          }
        }

        break;
      }

      default:
        break;
    }
  }
}

module.exports = transformState;
