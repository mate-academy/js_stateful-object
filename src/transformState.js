/* eslint-disable spaced-comment */
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const reducer = (reducerState, action) => {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          reducerState[key] = action.extraData[key];
        }
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete reducerState[key];
        }
        break;
      case 'clear':
        for (const param in reducerState) {
          delete reducerState[param];
        }
        break;
      default:
        break;
    }
  };

  for (const act of actions) {
    reducer(state, act);
  }
}

module.exports = transformState;
