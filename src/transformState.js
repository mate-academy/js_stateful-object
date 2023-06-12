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
        Object.assign(state, extraData);

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
        throw new Error('Unexpected type');
    }
  }

  return state;
}

module.exports = transformState;
