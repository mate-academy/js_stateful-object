'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    reducer(action);
  }

  function reducer({ type, extraData, keysToRemove }) {
    switch (type) {
      case 'addProperties':
        for (const key in extraData) {
          state[key] = extraData[key];
        }

        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;

      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
