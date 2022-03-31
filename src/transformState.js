'use strict';

function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    }

    if (key.type === 'removeProperties') {
      for (const rem of key.keysToRemove) {
        delete state[rem];
      }
    }

    if (key.type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  }

  return state;
}

module.exports = transformState;
