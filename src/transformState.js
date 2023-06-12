'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        Object.keys(state).forEach((key) => {
          delete state[key];
        });
        break;

      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          delete state[key];
        });
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      default:
        throw new Error(`Error`);
    }
  }

  return state;
}

module.exports = transformState;
