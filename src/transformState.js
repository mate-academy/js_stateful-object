'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      default:
        return null;
    }
  }

  return state;
}

module.exports = transformState;
