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
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(currentKey => {
          if (state.hasOwnProperty(currentKey)) {
            delete state[currentKey];
          }

          return state;
        });
        break;

      case 'clear':
        Object.getOwnPropertyNames(state).forEach((stateProperty) => {
          delete state[stateProperty];
        });
        break;

      default:
        throw Error;
    }
  }

  return state;
}

module.exports = transformState;
