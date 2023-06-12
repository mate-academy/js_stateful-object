'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    reducer(state, action);
  }

  return state;
}

function reducer(state, { type, extraData, keysToRemove }) {
  switch (type) {
    case 'addProperties':
      Object.assign(state, extraData);

      break;

    case 'removeProperties':
      for (const key of keysToRemove) {
        delete state[key];
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

module.exports = transformState;
