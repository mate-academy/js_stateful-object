'use strict';

function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        key.keysToRemove.forEach(el => delete state[el]);
        break;

      default:
        Object.keys(state).forEach(el => delete state[el]);
    }
  }

  return state;
}

module.exports = transformState;
