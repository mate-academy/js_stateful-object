'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'addProperties'):
        Object.assign(state, action.extraData);
        break;

      case (action.type === 'removeProperties'):
        action.keysToRemove.map(curr => {
          if (state.hasOwnProperty(curr)) {
            delete state[curr];
          }

          return state;
        });
        break;

      case (action.type === 'clear'):
        Object.getOwnPropertyNames(state).forEach(function(prop) {
          delete state[prop];
        });
        break;

      default:
        return Error;
    }
  }

  return state;
}

module.exports = transformState;
