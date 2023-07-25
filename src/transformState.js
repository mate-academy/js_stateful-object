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

      case 'clear':
        Object.keys(state).forEach(el => delete state[el]);
        break;

      default:
        throw new Error('Error! Please check input data!');
    }
  }

  return state;
}

module.exports = transformState;
